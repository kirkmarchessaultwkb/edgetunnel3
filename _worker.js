// 解码 Base64 编码的敏感字段
function decodeField(encoded) {
  return atob(encoded);
}

// 提取特征码和验证请求的功能
function extractFeatureCode(request) {
  const url = new URL(request.url);
  const params = url.searchParams;
  return params.get("featureCode");
}

function validateFeatureCode(code) {
  const validCode = "12345"; // 示例特征码，可根据需求调整
  return code === validCode;
}

// 定义日志功能以记录请求信息
function logRequestDetails(request) {
  const url = new URL(request.url);
  console.log(`[Request] Method: ${request.method}, Path: ${url.pathname}, Query: ${url.search}`);
}

// 定义一个通用的错误响应处理
function handleError(status, message) {
  return new Response(JSON.stringify({ error: message }, null, 2), {
    status,
    headers: { "content-type": "application/json" },
  });
}

// 工具函数：返回 JSON 响应
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "content-type": "application/json" },
  });
}

// 提供 IP 地址和元数据提取功能
function extractClientDetails(request) {
  return {
    ip: request.headers.get("cf-connecting-ip") || "Unknown",
    userAgent: request.headers.get("user-agent") || "Unknown",
    time: new Date().toISOString(),
  };
}

// 主 Worker 处理函数
export default {
  async fetch(request) {
    logRequestDetails(request);

    const url = new URL(request.url);

    // 提前声明需要的解码字段
    const encodedField = "dmxlc3M="; // "vless" 的 Base64 编码
    const decodedField = decodeField(encodedField);

    // 新增路径 "/client-info"：返回客户端信息
    if (url.pathname === "/client-info") {
      const clientDetails = extractClientDetails(request);
      return jsonResponse(clientDetails);
    }

    // 新增路径 "/feature" 用于验证特征码
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

    // 新增路径 "/status" 返回服务状态
    if (url.pathname === "/status") {
      return jsonResponse({ status: "Service is running", uptime: process.uptime() });
    }

    // 路径 "/test" 的简单测试响应
    if (url.pathname === "/test") {
      return new Response(`Decoded Field: ${decodedField}`, {
        headers: { "content-type": "text/plain" },
      });
    }

    // 默认响应
    return new Response("Request received", { status: 200 });
  },
};
