self.onmessage = async (e) => {
  const message = e.data;

  console.log('message', message);

  const root = await navigator.storage.getDirectory();
  const handle = await root.getFileHandle('name.txt', { create: true });

  const access = await handle.createSyncAccessHandle();

  access.write(Uint8Array.from([1,2,3]));

  const size = await access.getSize();

  const buffer = new DataView(new ArrayBuffer(size));

  const readBuf = access.read(buffer, { at: 0 });

  // Write the message to the end of the file.
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  access.write(encodedMessage, { at: readBuf });
  
  console.log(buffer);

  access.flush();
  access.close();
}
