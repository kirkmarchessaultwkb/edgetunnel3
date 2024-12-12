async fetch(request) {
  const url = new URL(request.url);

  // 动态路径生成
  const expectedPath = dynamicPathMapping("status");

  // 输出生成的动态路径
  console.log("Generated dynamic path:", expectedPath);

  // 动态路径匹配
  if (url.pathname === expectedPath) {
    return new Response("Status Check: All systems operational.", {
      headers: { "content-type": "text/plain" },
    });
  }

  // 未匹配路径时返回404
  return new Response("Request received", {
    status: 404,
    headers: { "content-type": "text/plain" },
  });
}


