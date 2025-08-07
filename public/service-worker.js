const CACHE_NAME = 'my-portfolio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Add other key assets here
  // For example:
  // '/assets/index-xxxxxxxx.js',
  // '/assets/index-xxxxxxxx.css',
  // '/assets/Abigael_Portfolio.png',
  // '/assets/Symphion_Screenshot.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(() => {
        // If the request fails, serve a fallback page (e.g., a simple offline page)
        // You would need to create this file and add it to your cache
        return caches.match('/offline.html');
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});