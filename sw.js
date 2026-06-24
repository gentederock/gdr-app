self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});

// Este Service Worker no intercepta NADA de tráfico real.
// Su único propósito es existir para que Chrome permita instalar la app.
// No hacemos event.respondWith en ningún caso, así todo el tráfico
// (búsquedas, pagos, fotos) sigue su curso normal sin pasar por acá.
self.addEventListener('fetch', function(event) {
  // Intencionalmente vacío.
});
