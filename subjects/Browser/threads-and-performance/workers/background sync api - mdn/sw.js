self.addEventListener('sync', (event) => {
  if (event.tag === 'my-sync') {
    console.log('sync', event.tag);

    event.waitUntil(async () => {
      // await new Promise((resolve) => setTimeout(resolve, 0));

      console.log('image-fetch');
    });
  }
});
