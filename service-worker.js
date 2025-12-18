const CACHE_NAME = 'binion-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-512.jpg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 기본 패치 전략
});
