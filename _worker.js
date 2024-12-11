import { Router } from 'https://cdn.skypack.dev/itty-router?min'; // 确保通过CDN引入 itty-router

const router = Router();

// 这里是合并后的 handleRequest 函数
async function handleRequest(request, decodedField = null) {
    if (decodedField) {
        // 处理带有 decodedField 的逻辑
        return new Response('Decoded Field Processing');
    } else {
        // 处理其他逻辑
        return new Response('Normal Processing');
    }
}

router.get('/', handleRequest);

addEventListener('fetch', event => {
    event.respondWith(router.handle(event.request));
});


