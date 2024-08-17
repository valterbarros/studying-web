describe('Fetch Progress - javascript.info', () => {
  it('should be possible to download progress fetch', async () => {
    const res = await fetch(`${import.meta.env.VITE_HOST_PUBLIC}/json-response.json`);

    const contentLength = +res.headers.get('Content-Length');

    const reader = res.body.getReader();

    const decoder = new TextDecoder();

    let textFinal = ''

    let receivedLength = 0;

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      textFinal += decoder.decode(value, { stream: !done });

      receivedLength += value.length;

      console.log(`you received ${receivedLength} from ${contentLength}`)
    }

    expect(receivedLength).toBe(contentLength);
  });
});
