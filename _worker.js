addEventListener('fetch', event => {
    event.respondWith(
      (async () => {
        try {
          const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'application/json',
            'Referer': 'https://your-referer-url.com', // 请根据您的需求替换
          };
  
          const response = await fetch(event.request.url, { method: 'GET', headers: headers });
          console.log(`Request URL: ${event.request.url}`);
          console.log(`Response Status: ${response.status}`);
          
          // 如果需要，可以返回响应内容
          return response;
        } catch (error) {
          console.error('Error:', error);
          return new Response('Error', { status: 500 });
        }
      })()
    );
  });
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  addEventListener('fetch', event => {
    event.respondWith(
      (async () => {
        try {
          // 延迟 2 秒后再进行请求
          await delay(2000);
  
          const response = await fetch(event.request.url);
          return response;
        } catch (error) {
          console.error('Error:', error);
          return new Response('Error', { status: 500 });
        }
      })()
    );
  });
  addEventListener('fetch', event => {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(event.request.url);
          console.log(`Successfully fetched: ${event.request.url}`);
          console.log(`Response Status: ${response.status}`);
          return response;
        } catch (error) {
          console.error(`Error fetching: ${event.request.url}`, error);
          return new Response('Error occurred while fetching', { status: 500 });
        }
      })()
    );
  });
  const sensitiveUrl = process.env.SENSITIVE_URL || 'https://fallback-url.com'; // 使用环境变量来处理 URL

  addEventListener('fetch', event => {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(sensitiveUrl);
          return response;
        } catch (error) {
          console.error('Error:', error);
          return new Response('Error', { status: 500 });
        }
      })()
    );
  });
   
