describe('Streaming requests with fetch - HTTP 203', () => {
  it('should accept readablestream as request body', () => {
    // feature detection https://developer.chrome.com/docs/capabilities/web-apis/fetch-streaming-requests
    const supportsRequestStreams = (() => {
      let duplexAccessed = false;
    
      const hasContentType = new Request('', {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          duplexAccessed = true;
          return 'half';
        },
      }).headers.has('Content-Type');
    
      return duplexAccessed && !hasContentType;
    })();

    expect(supportsRequestStreams).toBe(true);
  });
});
