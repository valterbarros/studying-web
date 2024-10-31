self.addEventListener('periodicsync', (event) => {
  console.log('sync event fired', event.tag);
  
  if (event.tag === 'content-sync') {
    console.log('syncing content...');
    
    // event.waitUntil(syncContent());
  }
});