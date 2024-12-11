// 统一的handleRequest函数
async function handleRequest(request) {
  const url = new URL(request.url);
  const decodedField = decodeURIComponent(url.searchParams.get("field"));
  return new Response(`Decoded Field: ${decodedField}`, {
    headers: { "Content-Type": "text/plain" }
  });
}

// 其他功能代码
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});
