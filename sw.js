const CACHE_NAME = 'snake-game-v1';
const urlsToCache = [
  './snake-game.html',
  './manifest.json',
  './.vercel/dog1.jpg.jpg',
  './.vercel/dog2.jpg.png',
  './.vercel/dog4.jpg.jpg',
  './.vercel/dog5.jpg.jpg',
  './.vercel/dog6.jpg.jpg',
  './.vercel/dog7.jpg.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});