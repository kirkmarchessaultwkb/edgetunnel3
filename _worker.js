export default {
  async fetch(request) {
    try {
      const url = new URL(request.url);

      // 使用 Base64 加密字段
      const encodedField = "dmxlc3M="; // "vless" 的 Base64 编码
      const decodedField = atob(encodedField); // 解码

      // 构造目标请求 URL
      if (url.pathname === "/test") {
        return new Response(`Field: ${decodedField}`, {
          headers: { "content-type": "text/plain" },
        });
      }

      // 其他逻辑可视需求扩展
      return new Response("OK", { status: 200 });
    } catch (error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  },
};

