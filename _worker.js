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

// 主 Worker 处理函数
export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 提前声明需要的解码字段
    const encodedField = "dmxlc3M="; // "vless" 的 Base64 编码
    const decodedField = decodeField(encodedField);

    // 针对路径 "/test" 的简单测试响应
    if (url.pathname === "/test") {
      return new Response(`Decoded Field: ${decodedField}`, {
        headers: { "content-type": "text/plain" },
      });
    }

    // 新增路径 "/featureCode" 验证功能
    if (url.pathname === "/featureCode") {
      const featureCode = extractFeatureCode(request);
      if (featureCode && validateFeatureCode(featureCode)) {
        return new Response("Feature code validated successfully!", {
          headers: { "content-type": "text/plain" },
        });
      } else {
        return new Response("Invalid feature code", { status: 400 });
      }
    }

    // 其他请求的默认响应
    return new Response("Request received", { status: 200 });
  },
};

