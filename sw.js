// Caches the app and the OCR engine so repeat use works offline. Language packs are cached by Tesseract.js itself.
const CACHE = "lenstranslate-v2";
const CDN = ["cdn.jsdelivr.net", "cdnjs.cloudflare.com"];

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.pathname.endsWith(".traineddata")) return;               // handled by Tesseract's own cache
  const sameOrigin = url.origin === location.origin;
  if (!sameOrigin && !CDN.includes(url.hostname)) return;          // never touch the translation API
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (sameOrigin) {                                              // app files: network first, offline fallback
      try { const r = await fetch(req); if (r.ok) cache.put(req, r.clone()); return r; }
      catch (err) { return (await cache.match(req)) || (await cache.match("index.html")) || Response.error(); }
    }
    const hit = await cache.match(req);                            // engine files: cache first
    if (hit) return hit;
    const r = await fetch(req);
    if (r.ok) cache.put(req, r.clone());
    return r;
  })());
});
