// 混淆处理的工具函数
function obfuscateBase64(input) {
  return btoa(input.split('').reverse().join('')); // 将字符串反转并编码为 Base64
}

function deobfuscateBase64(encoded) {
  return atob(encoded).split('').reverse().join(''); // 解码并还原字符串
}

// 主 Worker 处理函数
export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 使用混淆后的敏感字段
    const encodedField = obfuscateBase64("vless"); // "vless" 的混淆编码
    const decodedField = deobfuscateBase64(encodedField);

    // 针对路径 "/test" 的测试响应
    if (url.pathname === "/test") {
      return new Response(`Decoded Field: ${decodedField}`, {
        headers: { "content-type": "text/plain" },
      });
    }

    // 默认响应
    return new Response("Request received", { status: 200 });
  },
};
