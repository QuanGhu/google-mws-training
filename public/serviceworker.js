var CACHE_NAME = 'localcache';
var urlsToCache = [
  '/',
  '/index.html',
  '/images/home.png',
  '/images/myphoto.jpeg',
  '/css/style.css',
  '/script.js',
  '/project1/script.js',
  '/project1/index.html',
  '/project2/index.html',
  '/project2/map.js',
  'https://api.tiles.mapbox.com/v4/mapbox.streets/13/6461/4071.png?access_token=pk.eyJ1IjoicXVhbmdodSIsImEiOiJjam01enlnNzcyMGFjM3JteTE2ejU5aXE4In0.ihkp_PrrjZZo8yzAMoEbLQ'
];
self.addEventListener('install', function(event) {
  // install files needed offline
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
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