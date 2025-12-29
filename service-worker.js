const cacheName = 'health-dashboard-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js'
];

// Install service worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Activate service worker
self.addEventListener('activate', e => {
  console.log('Service Worker activated');
});

// Fetch from cache first
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
