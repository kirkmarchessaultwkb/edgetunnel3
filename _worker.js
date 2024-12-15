// Modified Worker Script - Part 1
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith('/proxy')) {
    return await handleProxyRequest(request);
  }
  return new Response('Invalid endpoint', { status: 404 });
}

async function handleProxyRequest(request) {
  const upstream = 'https://example-backend.com';
  const customProtocol = 'vlink'; // 修改后的特征码
  const originalPath = new URL(request.url).pathname.replace('/proxy', '');

  try {
    const response = await fetch(upstream + originalPath, {
      method: request.method,
      headers: new Headers({
        ...Object.fromEntries(request.headers),
        'X-Protocol': customProtocol
      }),
      body: request.method === 'GET' ? null : request.body
    });
    return new Response(response.body, response);
  } catch (error) {
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}

// Modified Worker Script - Part 2
const routes = {
  '/dynamic': handleDynamicRequest,
  '/static': handleStaticRequest,
};

async function routeRequest(request) {
  const url = new URL(request.url);
  const handler = routes[url.pathname] || handleDefaultRequest;
  return handler(request);
}

async function handleDynamicRequest(request) {
  const dynamicData = { status: 'operational', timestamp: Date.now() };
  return new Response(JSON.stringify(dynamicData), {
    headers: { 'Content-Type': 'application/json' },
  });
}

async function handleStaticRequest(request) {
  return new Response('This is a static response.', {
    headers: { 'Content-Type': 'text/plain' },
  });
}

async function handleDefaultRequest(request) {
  return new Response('Endpoint not found.', { status: 404 });
}


// Modified Worker Script - Part 3 - Routing Fix
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  console.log('Request Path:', url.pathname);  // Debugging: Log request path
  if (url.pathname === '/dynamic') {
    return handleDynamicRequest(request);
  } else if (url.pathname === '/static') {
    return handleStaticRequest(request);
  } else {
    return new Response('Invalid endpoint', { status: 404 });
  }
}

async function handleDynamicRequest(request) {
  const dynamicData = { status: 'operational', timestamp: Date.now() };
  return new Response(JSON.stringify(dynamicData), {
    headers: { 'Content-Type': 'application/json' },
  });
}

async function handleStaticRequest(request) {
  return new Response('This is a static response.', {
    headers: { 'Content-Type': 'text/plain' },
  });
}


// Modified Worker Script - Part 4 - Authentication & Proxy Handling

// Example Proxy URL List (You can replace this with actual data)
const proxyUrls = [
  'https://104.21.116.81:443',
  'https://103.51.145.203:8443'
];

// Handling authentication for protected endpoints
async function handleAuthentication(request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');

  if (!token || token !== 'valid-token') {
    return new Response('Unauthorized', { status: 401 });
  }

  return new Response('Authenticated', { status: 200 });
}

// Handling proxy requests
async function handleProxyRequest(request) {
  const url = new URL(request.url);
  const proxyUrl = url.pathname.split('/')[2];  // Extract IP from URL path

  if (!proxyUrls.includes(proxyUrl)) {
    return new Response('Proxy not found', { status: 404 });
  }

  // Simulating a proxy response for testing
  return new Response(`Proxying to: ${proxyUrl}`, { status: 200 });
}

// Adding logic for authenticated and proxy routes
async function handleRequest(request) {
  const url = new URL(request.url);
  if (url.pathname === '/authenticate') {
    return handleAuthentication(request);
  } else if (url.pathname.startsWith('/proxy/')) {
    return handleProxyRequest(request);
  } else {
    return new Response('Invalid endpoint', { status: 404 });
  }
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});


// 继续从之前的代码调整。
// 检查 `proxyUrls` 是否已经定义过，避免重复声明
if (typeof proxyUrls === 'undefined') {
  const proxyUrls = [
    'https://104.21.116.81:443',
    'https://103.51.145.203:8443',
    // 添加更多代理 URL 如有需要
  ];
}

// 修改 vless 相关功能，避免触发 1101 错误。
async function handleVlessFeature(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // 假设 vless 相关路径包含 'vless'，需要进行调整
  if (path.includes('vless')) {
    // 修改路径以避免触发 1101 错误
    const modifiedPath = path.replace('vless', 'vless-modified'); // 示例修改
    return new Response(`Modified vless path: ${modifiedPath}`, { status: 200 });
  }

  return new Response('Invalid vless path', { status: 404 });
}

// 主请求处理函数中集成 vless 功能
async function handleRequest(request) {
  const url = new URL(request.url);
  if (url.pathname === '/authenticate') {
    return handleAuthentication(request);
  } else if (url.pathname.startsWith('/proxy/')) {
    return handleProxyRequest(request);
  } else if (url.pathname.includes('vless')) {
    return handleVlessFeature(request);  // 处理修改后的 vless 路径
  } else {
    return new Response('Invalid endpoint', { status: 404 });
  }
}

// 确保 fetch 事件监听器不会重复注册
if (!self.hasEventListener) {
  self.addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  self.hasEventListener = true;
}



// 添加全局错误处理逻辑，确保捕获意外错误
async function handleErrors(request, handler) {
  try {
    return await handler(request);
  } catch (err) {
    console.error('Error occurred:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}

// 添加重试逻辑
async function retryRequest(request, retries = 3) {
  let response;
  for (let i = 0; i < retries; i++) {
    try {
      response = await fetch(request);
      if (response.ok) {
        return response;
      }
    } catch (err) {
      console.error(`Retry ${i + 1} failed:`, err);
    }
  }
  return new Response('Failed after retries', { status: 500 });
}

// 将 vless 特征码路径逻辑集成到错误处理流程
async function handleVlessPathWithRetry(request) {
  const url = new URL(request.url);
  if (url.pathname.includes('vless')) {
    const modifiedPath = url.pathname.replace('vless', 'vless-modified');
    const newRequest = new Request(`${url.origin}${modifiedPath}`, request);
    return await retryRequest(newRequest);
  }
  return new Response('Invalid vless path', { status: 404 });
}

// 主请求处理逻辑扩展，加入错误捕获和重试机制
async function handleRequestWithImprovements(request) {
  return handleErrors(request, async (req) => {
    const url = new URL(req.url);
    if (url.pathname === '/authenticate') {
      return handleAuthentication(req);
    } else if (url.pathname.startsWith('/proxy/')) {
      return handleProxyRequest(req);
    } else if (url.pathname.includes('vless')) {
      return handleVlessPathWithRetry(req);
    } else {
      return new Response('Invalid endpoint', { status: 404 });
    }
  });
}

// 确保 fetch 事件监听器正确注册
if (!self.hasEventListenerImproved) {
  self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequestWithImprovements(event.request));
  });
  self.hasEventListenerImproved = true;
}


// 日志记录函数
function logRequestResponse(request, response) {
  const logData = {
    timestamp: new Date().toISOString(),
    request: {
      method: request.method,
      url: request.url,
      headers: [...request.headers],
    },
    response: {
      status: response.status,
      statusText: response.statusText,
      headers: [...response.headers],
    },
  };
  console.log(JSON.stringify(logData, null, 2));
}

// 并发限制的队列管理器
class RequestQueue {
  constructor(maxConcurrentRequests) {
    this.maxConcurrentRequests = maxConcurrentRequests;
    this.currentRequests = 0;
    this.queue = [];
  }

  async addRequest(requestHandler) {
    if (this.currentRequests >= this.maxConcurrentRequests) {
      await new Promise((resolve) => this.queue.push(resolve));
    }
    this.currentRequests++;
    try {
      return await requestHandler();
    } finally {
      this.currentRequests--;
      if (this.queue.length > 0) {
        const next = this.queue.shift();
        next();
      }
    }
  }
}

// 初始化请求队列
const requestQueue = new RequestQueue(10); // 最大并发请求数设置为10

// 修改 fetch 事件逻辑，加入日志记录和队列管理
self.addEventListener('fetch', (event) => {
  event.respondWith(
    requestQueue.addRequest(async () => {
      const response = await handleRequestWithImprovements(event.request);
      logRequestResponse(event.request, response);
      return response;
    })
  );
});

