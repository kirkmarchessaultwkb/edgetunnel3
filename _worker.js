export default {
  async fetch(request) {
    logRequestDetails(request);

    const url = new URL(request.url);

    // 提前声明需要的解码字段
    const encodedField = "dmxlc3M="; // "vless" 的 Base64 编码
    const decodedField = decodeField(encodedField);

    // 已定义路径
    if (url.pathname === "/validate-token") {
      return await handleValidateToken(request);
    }

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

    // 未定义路径的默认响应
    return handleError(404, "Path not found");
  },
};
