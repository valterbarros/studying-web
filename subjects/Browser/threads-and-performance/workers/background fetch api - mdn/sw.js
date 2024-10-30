self.addEventListener('fetch', (event) => {
  // Skip the service worker for the feed. The page handles the caching.
  if (event.request.url === 'https://http203.libsyn.com/rss') return;
  if (!event.request.url.includes('.mp4')) return fetch(event.request);
  
  event.respondWith(async function() {
    
    // Offline first:
    const cachedResponse = await caches.match(event.request);

    console.log('cached', cachedResponse);
    
    return cachedResponse;
  }());
});
self.addEventListener('backgroundfetchsuccess', (event) => {
  console.log('backgroundfetchsuccess123');
  const bgFetch = event.registration
  
  event.waitUntil(async function () {
    const cache = await caches.open(bgFetch.id);
    const records = await bgFetch.matchAll();
    
    const promises = records.map(async record => {
      await cache.put(record.request, await record.responseReady);
    });
    
    await Promise.all(promises);

    event.updateUI({ title: 'Episode 5 ready to listen!' });
  }());
});

self.addEventListener('backgroundfetchfailure', event => {
  console.log('Background fetch failed', event);
});

self.addEventListener('backgroundfetchabort', event => {
  console.log('Background fetch abort123', event);
});

self.addEventListener('backgroundfetchclick', event => {
  console.log('backgroundfetchclick123');
  clients.openWindow('http://localhost:5501/subjects/Browser/threads-and-performance/workers/background%20fetch%20api%20-%20mdn/example.html');
});

// delete old caches
self.addEventListener('activate', function(event) {
  console.log('active');

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        return caches.delete(key);
      }));
    })
  );
});
