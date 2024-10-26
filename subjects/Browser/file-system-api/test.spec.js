async function truncateFile(handle, size) {
  const access = await handle.createWritable();

  await access.write({ type: 'truncate', size });
  await access.close();
}

describe('file system api', () => {
  describe('acess files and directories', () => {
    const filesToCreate = ['ets.txt', 'space-ship.text'];

    beforeAll(async () => {
      const root = await navigator.storage.getDirectory();
      const area51 = await root.getDirectoryHandle('area51', { create: true });
      
      for (const file of filesToCreate) {
        await area51.getFileHandle(file, { create: true });
      }
    });

    afterAll(async () => {
      const root = await navigator.storage.getDirectory();

      await root.removeEntry('area51', { recursive: true });
    });

    it('should return FileSystemHandle', async () => {
      const root = await navigator.storage.getDirectory();
  
      expect(root.getFileHandle('name.txt', { create: true })).resolves.toBeInstanceOf(FileSystemHandle);
    });
  
    it('should return FileSystemDirectoryHandle', async () => {
      const root = await navigator.storage.getDirectory();
  
      expect(root.getDirectoryHandle('name', { create: true })).resolves.toBeInstanceOf(FileSystemDirectoryHandle);
    });
  
    it('should be possible to list files in the directory', async () => {
      const root = await navigator.storage.getDirectory();
      const area51 = await root.getDirectoryHandle('area51');
  
      const files = await Array.fromAsync(area51.entries())
  
      expect(files).toHaveLength(2);
    });

    it('should be possible to list files in the directory', async () => {
      const root = await navigator.storage.getDirectory();
      const area51 = await root.getDirectoryHandle('area51', { create: true });
      const sub = await area51.getDirectoryHandle('sub', { create: true });
  
      const file = await sub.getFileHandle('sub.txt', { create: true });
  
      expect(await area51.resolve(file)).toEqual(['sub', 'sub.txt']);
    });

    it('should be possible to download a file and save to file system', async () => {
      const root = await navigator.storage.getDirectory();
      const area51 = await root.getDirectoryHandle('area51', { create: true });

      const handle = await area51.getFileHandle('response.json', { create: true });
      const access = await handle.createWritable();

      const res = await fetch(`${import.meta.url}/text.txt`);

      // pipe data to access
      await res.body.pipeTo(access);

      const file = await handle.getFile();

      expect(file.size).toBeGreaterThan(100);
    });
  });

  describe('createWritable', () => {
    it('should be possible to write async to a file', async () => {
      const root = await navigator.storage.getDirectory();
  
      const handle = await root.getFileHandle('name.txt', { create: true });
  
      const access = await handle.createWritable();
  
      await truncateFile(handle, 0)
  
      let file = await handle.getFile();
  
      await vi.waitFor(() => expect(file.size).toBe(0))
  
      await access.write('write this content');
      await access.close();
  
      file = await handle.getFile();
  
      await vi.waitFor(async () => expect(file.size).toBe(18))
    });

    it('should be possible to seek and write to file', async () => {
      const root = await navigator.storage.getDirectory();
  
      const handle = await root.getFileHandle('name.txt', { create: true });
  
      const access = await handle.createWritable();
  
      await truncateFile(handle, 0)
  
      let file = await handle.getFile();
  
      await access.write('write this content');
      await access.write({ type: 'seek', position: 20 });
      await access.write('w');
      await access.close();
  
      file = await handle.getFile();
  
      await vi.waitFor(async () => expect(file.size).toBe(21))
    });

    it('should be possible to pass an viewData to file', async () => {
      const root = await navigator.storage.getDirectory();
  
      const handle = await root.getFileHandle('name.txt', { create: true });
  
      const access = await handle.createWritable();
  
      await truncateFile(handle, 0)
  
      let file = await handle.getFile();

      const encoder = new TextEncoder();
      const dataView = encoder.encode('write text');
  
      await access.write(dataView);
      await access.close();
  
      file = await handle.getFile();
  
      await vi.waitFor(async () => expect(file.size).toBe(dataView.byteLength))
    });
  });

  // Appear that only works at worker
  it.skip('should be possible to get size from file syncronisly', async () => {
    const root = await navigator.storage.getDirectory();
  
    const handle = await root.getFileHandle('name.txt', { create: true });

    const access = await handle.createWritable();

    await access.write('write text');
    await access.close();

    const accessHandle = await handle.createSyncAccessHandle();

    expect(accessHandle.getSize()).toBeGreaterThan(2);
  });
});
