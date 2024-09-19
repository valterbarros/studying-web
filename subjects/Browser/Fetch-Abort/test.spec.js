describe('Fetch Abort - javascript.info', () => {
  it('should be possible abort a fetch ongoing', async () => {
    const controller = new AbortController();

    const fe = fetch(`${import.meta.env.VITE_HOST_PUBLIC}/json-response.json`, { signal: controller.signal });

    setTimeout(() => {
      controller.abort();
    });

    expect(fe).not.rejects.toThrowError('AbortError');
  });

  it('should be possible to listen to abort event', async () => {
    const controller = new AbortController();

    const p = new Promise((_, reject) => {
      controller.signal.addEventListener('abort', () => {
        reject(controller.signal.reason)
      });
    });

    controller.abort('reason');

    await expect(p).rejects.toThrowError('reason');
  });

  it('should be possible to add timeout to fetch',() => {
    const fe = fetch(`${import.meta.env.VITE_HOST_PUBLIC}/json-response.json`, { signal: AbortSignal.timeout(1) });

    expect(fe).rejects.toThrowError('timed out');
  });
});
