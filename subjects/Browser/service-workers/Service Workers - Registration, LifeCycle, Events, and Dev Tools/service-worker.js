function longTask() {
  const date = Date.now()
  for (let index = 0; index < 50_000_000; index++) {
    self.arr[index] = Math.sqrt(index) * Math.pow(index, 10);
  }

  console.log('finish', Date.now() - date);
}

self.addEventListener('message', async (ev) => {
  
  const clients = await self.clients.matchAll({includeUncontrolled: true});
  console.log(ev.source.id);

  switch (ev.data.name) {
    case 'broadcast':
      clients.forEach((c) => c.postMessage('I received'));

      break;
  
    default:
      break;
  }
});

const cacheName = `v1-${Date.now()}`;

self.addEventListener('install', (ev) => {
  console.log('install');

  ev.waitUntil(caches.open(cacheName).then(async (cache) => {
    return cache.addAll([
      '/',
      './salluti.jpeg',
      './example.html',
      './service-worker.js'
    ], {ignoreVary: true});
  }));

  self.skipWaiting();
});

const EXPIRE_CACHE_DELAY = 500;

function isValid(response) {
  if (!response) return false;

  const fetched = response.headers.get('sw-fetched-on');
  console.log('fetched', fetched && parseFloat(fetched) + (EXPIRE_CACHE_DELAY) - Date.now());
  if (fetched && (parseFloat(fetched) + (EXPIRE_CACHE_DELAY)) > Date.now()) return true;
  return false;
}

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request, { ignoreVary: true }).then((response) => {
      if (isValid(response)) {
        console.log('valid', response);
        
        return response.clone();
      }

      return fetch(e.request).then(async (response) => {
        if (!e.request.url.includes('chrome')) {
          const copy = response.clone();
          const headers = new Headers(copy.headers);
          headers.append('sw-fetched-on', Date.now())
  
          const cache = await caches.open(cacheName);

          const body = await copy.blob()

          await cache.put(e.request, new Response(body, {
            status: copy.status,
            statusText: copy.statusText,
            headers: headers
          }));
        }

        return response.clone();
      });
   })
  )
});

self.addEventListener('activate', (event) => {
  console.log('activate');
  
  const keepKey = [cacheName];

  event.waitUntil(caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      if (keepKey.indexOf(key) === -1) {
        return caches.delete(key);
      }
    }));
  }));

  self.clients.claim();
});
