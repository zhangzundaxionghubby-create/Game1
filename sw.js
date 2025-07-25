const CACHE_NAME = 'snake-game-v1';
const urlsToCache = [
  './snake-game.html',
  './manifest.json',
  './dog1.jpg.jpg',
  './dog2.jpg.png',
  './dog4.jpg.jpg',
  './dog5.jpg.jpg',
  './dog6.jpg.jpg',
  './dog7.jpg.jpg'
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