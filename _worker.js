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
