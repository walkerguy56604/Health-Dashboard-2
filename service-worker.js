const cacheName = 'health-dashboard-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/css-style.css',
  '/js-app.js'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

// Activate event
self.addEventListener('activate', event => {
  console.log('Service Worker activated');
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
