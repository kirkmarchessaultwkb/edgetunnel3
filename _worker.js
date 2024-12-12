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

// 主 Worker 处理函数
export default {
  async fetch(request) {
    logRequestDetails(request);

    const url = new URL(request.url);

    // 提前声明需要的解码字段
    const encodedField = "dmxlc3M="; // "vless" 的 Base64 编码
    const decodedField = decodeField(encodedField);

    // 新增路径 "/headers" 返回所有请求头
    if (url.pathname === "/headers") {
      const headers = [...request.headers.entries()];
      const response = new Response(JSON.stringify({ headers }, null, 2), {
        headers: { "content-type": "application/json" },
      });
      return response;
    }

    // 新增路径 "/echo" 返回请求体内容
    if (url.pathname === "/echo") {
      const body = await request.text();
      const response = new Response(body, { headers: { "content-type": "text/plain" } });
      return response;
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
