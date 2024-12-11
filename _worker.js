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

// 主 Worker 处理函数
async function fetchHandler(request) {
  const url = new URL(request.url);

  // 解码敏感字段
  const encodedField = "dmxlc3M="; // "vless" 的 Base64 编码
  const decodedField = atob(encodedField);

  // 记录请求日志
  console.log(`Received request for: ${url.pathname}`);

  // 路由管理
  return handleRequest(url, decodedField);
}

// 合并唯一导出
export default {
  fetch: fetchHandler,
};
