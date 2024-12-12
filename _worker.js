// 辅助函数：验证 JWT（JSON Web Token）
async function validateJWT(token, secret) {
  try {
    const [header, payload, signature] = token.split(".");
    if (!header || !payload || !signature) {
      return { valid: false, reason: "Invalid token format." };
    }

    const decodedPayload = JSON.parse(atob(payload));
    const issuedAt = decodedPayload.iat;
    const expiry = decodedPayload.exp;

    const now = Math.floor(Date.now() / 1000);
    if (expiry && expiry < now) {
      return { valid: false, reason: "Token has expired." };
    }

    // 模拟签名验证（替换为实际签名验证逻辑）
    const expectedSignature = btoa(secret + header + payload);
    if (signature !== expectedSignature) {
      return { valid: false, reason: "Invalid signature." };
    }

    return { valid: true, payload: decodedPayload };
  } catch (e) {
    return { valid: false, reason: "Error validating token." };
  }
}

// 新增路径 "/validate-token"：验证 JWT
async function handleValidateToken(request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  if (!token) {
    return handleError(400, "Token is required.");
  }

  const secret = "your-secret-key"; // 替换为您的实际密钥
  const validation = await validateJWT(token, secret);

  if (!validation.valid) {
    return handleError(403, validation.reason);
  }

  return jsonResponse({
    message: "Token is valid.",
    payload: validation.payload,
  });
}

// 主 Worker 处理函数
export default {
  async fetch(request) {
    logRequestDetails(request);

    const url = new URL(request.url);

    // 提前声明需要的解码字段
    const encodedField = "dmxlc3M="; // "vless" 的 Base64 编码
    const decodedField = decodeField(encodedField);

    // 新增路径 "/validate-token"：验证 JWT
    if (url.pathname === "/validate-token") {
      return await handleValidateToken(request);
    }

    // 其他已定义路径
    if (url.pathname === "/client-info") {
      const clientDetails = extractClientDetails(request);
      return jsonResponse(clientDetails);
    }

    if (url.pathname === "/feature") {
      const featureCode = extractFeatureCode(request);
      if (!featureCode) {
        return handleError(400, "Feature code is required.");
      }

      if (!validateFeatureCode(featureCode)) {
        return handleError(403, "Invalid feature code.");
      }

      return jsonResponse({ message: "Feature code validated successfully!" });
    }

    if (url.pathname === "/status") {
      return jsonResponse({
        status: "Service is running",
        startTime: serviceStartTime,
        currentTime: new Date().toISOString(),
      });
    }

    if (url.pathname === "/test") {
      return new Response(`Decoded Field: ${decodedField}`, {
        headers: { "content-type": "text/plain" },
      });
    }

    // 默认响应
    return new Response("Request received", { status: 200 });
  },
};



    // 




