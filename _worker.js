// 解码 Base64 编码的敏感字段
function decodeField(encoded) {
  return atob(encoded);
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

    // 其他请求的默认响应
    return new Response("Request received", { status: 200 });
  },
};
// 路由管理函数
function handleRequest(url, decodedField) {
  switch (url.pathname) {
    case "/status":
      return new Response("Worker is running!", { status: 200 });

    case "/decoded":
      return new Response(`Sensitive Field Decoded: ${decodedField}`, {
        headers: { "content-type": "text/plain" },
      });

    default:
      return new Response("Route not found", { status: 404 });
  }
}

// 主 Worker 处理函数更新
export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 解码敏感字段
    const encodedField = "dmxlc3M="; // "vless" 的 Base64 编码
    const decodedField = atob(encodedField);

    // 记录请求日志
    console.log(`Received request for: ${url.pathname}`);

    // 路由管理
    return handleRequest(url, decodedField);
  },
};


