function longTask() {
  const date = Date.now()
  for (let index = 0; index < 50_000_000; index++) {
    self.arr[index] = Math.sqrt(index) * Math.pow(index, 10);
  }

  console.log('finish', Date.now() - date);
}

self.addEventListener('message', () => {
  console.log('message');
  longTask();
});

self.addEventListener('install', (ev) => {
  const p = new Promise((resolve) => {
    resolve(1);
  }).then((arg) => console.log('install', arg));

  ev.waitUntil(p);

  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('activated');

  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  console.log('fetch');
  
  // self.clients.matchAll({includeUncontrolled: true}).then(function(clients) {
  //   clients.forEach(client => {
  //     console.log('client', client);
  //   });
  // });
  // console.log('fetch',e.request);
});
