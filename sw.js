self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  // Solo nos metemos en pedidos del propio sitio (GitHub Pages).
  // Todo lo que va hacia Apps Script (otro dominio) lo dejamos pasar de largo,
  // tal cual, sin que el Service Worker intervenga.
  if (url.origin !== self.location.origin) {
    return;
  }
  event.respondWith(fetch(event.request));
});

