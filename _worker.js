export default {
  async fetch(request) {
    return new Response("Hello, Cloudflare Worker!", {
      headers: { "content-type": "text/plain" },
    });
  },
};

