describe('Streams - MDN', () => {
  it('should be possible to stream Response.body', async () => {
    const imgUrl = `${import.meta.env.VITE_HOST_FIXTURES}/fixtures/salluti.jpeg`;

    const response = await fetch(imgUrl);

    expect(response.body).toBeInstanceOf(ReadableStream);

    const reader = response.body.getReader();

    const { value, done } = await reader.read();
    
    expect(done).toBe(false);
    
    expect(value).toBeInstanceOf(Uint8Array)
  });

  it('should call start when ReadableStream is constructed', () => {
    expect.hasAssertions();

    new ReadableStream({
      start(controller) {
        expect(controller).toHaveProperty('close');
        expect(controller).toBeInstanceOf(ReadableStreamDefaultController)
      }
    });
  });

  it('should be possible to enqueue data from stream', async () => {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue('string')
        controller.close();
      }
    });

    for await (const chunk of stream) {
      expect(chunk).toBe('string')
    }
  });

  it('should not be possible to read simutanaly same ReadableStream', () => {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue('string')
        controller.close();
      }
    });

    stream.getReader();

    expect(() => stream.getReader()).toThrowError('Failed to execute \'getReader\' on \'ReadableStream\': ReadableStreamDefaultReader constructor can only accept readable streams that are not yet locked to a reader');
  });

  it('should be possible to pass a ReadableStream to a Response object', async () => {
    const closeFn = vi.fn();

    const imgUrl = `${import.meta.env.VITE_HOST_FIXTURES}/fixtures/salluti.jpeg`;

    const response = await fetch(imgUrl);

    const reader = response.body.getReader();

    const copyStream = new ReadableStream({
      async start(controller) {
        async function pump() {
          const { value, done } = await reader.read();
          if (done) {
            controller.close();
            return;
          };
  
  
          controller.enqueue(value);

          await pump()
        }

        return await pump();
      },
      close: closeFn,
    });

    const blob = await new Response(copyStream).blob();

    expect(blob.size).toBe(7946);
    vi.waitFor(() => expect(closeFn).toBeCalled());
  });

  it('should be possible to tee a stream', async () => {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue('string')
        controller.close();
      }
    });

    const teedOf = stream.tee();

    expect(teedOf).toHaveLength(2);

    const reader1 = teedOf[0].getReader();
    const reader2 = teedOf[1].getReader();

    console.log(reader1);

    const { value: value1 } = await reader1.read();
    const { value: value2 } = await reader2.read();

    expect(value1).toBe('string')
    expect(value2).toBe('string')
  });

  it('should reject read promise if release before finish read()', async () => {
    expect.hasAssertions();

    const stream = new ReadableStream({
      start() {
        // never enqueue data
      }
    });

    const reader = stream.getReader();

    setTimeout(() => reader.releaseLock())

    vi.waitFor(() => expect(reader.read()).rejects.toThrowError());
  });

  it('should be possible to cancel the stream read', () => {
    expect.hasAssertions();

    const stream = new ReadableStream({
      start() {
        // never enqueue data
      }
    });

    const reader = stream.getReader();

    setTimeout(() => reader.cancel())

    vi.waitFor(() => expect(reader.read()).resolves.toMatchObject({ done: true }));
  });

  it('should be possible to process text data', async () => {
    const textUrl = `${import.meta.env.VITE_HOST_FIXTURES}/fixtures/text.txt`;

    const response = await fetch(textUrl);

    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader()

    const { value: text } = await reader.read();

    expect(text).toMatch('Where does it come from?');
  });

  it('should be possible to pipeThrough a stream', async () => {
    const textUrl = `${import.meta.env.VITE_HOST_FIXTURES}/fixtures/text.txt`;

    const response = await fetch(textUrl);

    const readableStream = response.body;

    const utf8Decoder = new TextDecoder('utf-8');
    
    const transform = new TransformStream({
      transform(chunk, controller) {
        const text = utf8Decoder.decode(chunk, { stream: true });
        controller.enqueue(text.toUpperCase())
      }
    });
    
    const reader = readableStream.pipeThrough(transform).getReader();
    
    const { value: text } = await reader.read();
    
    expect(text).toMatch(/([A-Z]+(?=\s))/);
  });
  
  it('should TransformStream returns a writable stream and readable stream', () => {
    const { readable, writable } = new TransformStream({
      transform(chunk, controller) {
        const text = utf8Decoder.decode(chunk, { stream: true });
        controller.enqueue(text.toUpperCase())
      }
    });

    expect(readable).toBeInstanceOf(ReadableStream);
    expect(writable).toBeInstanceOf(WritableStream);
  });
});
