describe('XMLHTTPRequest API - javascript.info', () => {
  it('should be possible to use XMLHTTPRequest', async () => {
    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    
    const progress = vi.fn();
    xhr.onprogress = progress;

    xhr.open('GET', `${import.meta.env.VITE_HOST_PUBLIC}/json-response.json`);

    xhr.send();

    await new Promise((resolve) => {
      xhr.onload = resolve;
    });

    await vi.waitFor(() => expect(progress).toBeCalled());

    expect(xhr.getAllResponseHeaders()).include('cache-control')
  });
});
