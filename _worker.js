addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    
    // 路径匹配规则
    if (url.pathname.startsWith('/featureCode')) {
        return new Response('特征码校验成功', { status: 200 });
    }

    // 默认处理：直接转发请求
    try {
        const response = await fetch(request);
        return response;
    } catch (err) {
        return new Response(`错误: ${err.message}`, { status: 500 });
    }
}





