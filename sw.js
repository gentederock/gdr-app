self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Intencionalmente vacío: este Service Worker no intercepta tráfico real,
  // solo existe para que el navegador permita instalar la app.
});
