self.addEventListener('message', (e) => {
  console.log('inside worker', e, e.data);

  const buffer = new ArrayBuffer(1024);

  // Transfer ownership of buffer to listener
  e.currentTarget.postMessage(buffer, [buffer]);

  console.assert(buffer.byteLength === 0, 'is empty')
});
