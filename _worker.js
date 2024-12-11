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
    logRequestDetails(request); // 新增日志记录功能

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
        return handleError(400, "Invalid feature code");
      }
    }

    // 新增路径 "/info" 返回请求信息
    if (url.pathname === "/info") {
      const info = {
        method: request.method,
        headers: [...request.headers.entries()],
      };
      return new Response(JSON.stringify(info, null, 2), {
        headers: { "content-type": "application/json" },
      });
    }

    // 新增路径 "/decode" 解码 Base64 数据
    if (url.pathname === "/decode") {
      const data = url.searchParams.get("data");
      if (!data) {
        return handleError(400, "Missing 'data' parameter");
      }
      try {
        const decoded = decodeField(data);
        return new Response(decoded, { headers: { "content-type": "text/plain" } });
      } catch (e) {
        return handleError(400, "Invalid Base64 data");
      }
    }

    // 其他请求的默认响应
    return new Response("Request received", { status: 200 });
  },
};



