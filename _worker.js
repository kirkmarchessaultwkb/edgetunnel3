addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    // 核心特征码匹配逻辑
    if (url.pathname.startsWith('/featureCode')) {
        return new Response('特征码校验成功', { status: 200 });
    }
    return fetch(request); // 默认转发请求
}





