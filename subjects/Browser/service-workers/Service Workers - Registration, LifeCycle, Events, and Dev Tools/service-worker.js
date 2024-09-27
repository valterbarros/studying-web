console.log('service');


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

self.addEventListener('install', () => {
  console.log('install');
});
self.addEventListener('activate', () => {
  console.log('activated');
});
self.addEventListener('fetch', (e) => {
  console.log('fetch',e.request);
});
