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

