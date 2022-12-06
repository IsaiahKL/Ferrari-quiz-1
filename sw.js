const version = 'v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/quizproject.css',
        '/manifest.json',
        '/quizproject.js',
        '/sw.js',
        '/quizimages/q3.jfif',
        '/quizimages/q4.jfif',
        '/quizimages/q5.jfif',
        '/quizimages/q6.jfif',
        '/quizimages/q7.jfif',
        '/quizimages/q8.jfif',
        '/quizimages/q9.jpg',
        '/quizimages/q10.jfif',
        '/quizimages/q11.webp',
        '/quizimages/q12.webp',
        '/icons/icon-192x192.png',
        '/icons/icon-256x256.png',
        '/icons/icon-348x348.png',
        '/icons/icon-512x512.png',
        '/icons/quiz-logo.png',
        '/notfound.txt'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open(version).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/notfound.txt');
      });
    }
  }));
});