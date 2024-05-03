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
    
    vi.waitFor(() => expect(reader.read()).rejects.toThrowError());

    reader.releaseLock()
  });

  it('should be possible to cancel the stream read', () => {
    expect.hasAssertions();

    const stream = new ReadableStream({
      start() {
        // never enqueue data
      }
    });

    const reader = stream.getReader();
    
    vi.waitFor(() => expect(reader.read()).resolves.toMatchObject({ done: true }));

    reader.cancel()
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

  it('should be possible to pipeTo a stream', async () => {
    const textUrl = `${import.meta.env.VITE_HOST_FIXTURES}/fixtures/text.txt`;

    const response = await fetch(textUrl);

    const readableStream = response.body;

    let externalString = '';

    const writableStream = new WritableStream({
      start() {},
      write(chunk) {
        externalString = String.fromCharCode(...chunk);
      }
    });

    await readableStream.pipeTo(writableStream);

    expect(externalString).toMatch(/([a-z]+(?=\s))/);
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

  it('should be possible to pass a object with writable and readable to pipeThrough', async () => {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue('string')
      }
    });

    const transformLike = {
      readable: new ReadableStream({
        start(controller) {
          controller.enqueue('enqueue');
        }
      }),
      writable: new WritableStream({
        write(chunk, controller) {
          // nothing here
        }
      }),
    }

    const reader = stream.pipeThrough(transformLike).getReader();

    const { value } = await reader.read();

    expect(value).toBe('enqueue');
  });

  it('should be possible to use a WritableStream', async () => {
    expect.hasAssertions();

    let final = '';

    const writableStream = new WritableStream({
      start() {},
      async write(chunk) {
        return await new Promise((resolve) => {
          final += chunk;
          resolve();
        });
      }
    });

    const writter = writableStream.getWriter();

    const letters = 'abcde';

    for (const char of letters) {
      await writter.ready;
      await writter.write(char);
    }

    expect(final).toBe(letters);
  });

  it('should create ReadableStream and done is true', async () => {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue('string')
        controller.enqueue('string')
        controller.enqueue('string')
        controller.enqueue('string')
        controller.close();
      }
    });

    const reader = stream.getReader();

    for (let index = 0; index < 5; index++) {
      const { value, done } = await reader.read();

      console.log(value, done);
    }
  });

  describe('Byte stream', () => {
    const DEFAULT_CHUNK_SIZE = 400;

    function getByteStream() {
      let bytesRead = 0;
      const maxDataRead = 800;

      function generateDateInto(buffer, size = 100, length) {
        const view = new Uint8Array(buffer, 0, length);

        for (let index = 0; index < size; index++) {
          view[index] = index + 1;
        }

        bytesRead += 100;

        return size
      }

      return new ReadableStream({
        type: 'bytes',
        start(controller) {
          async function creating() {
            await new Promise((resolve) => {
              if (bytesRead > maxDataRead) {
                return controller.close();
              }
  
              if (controller.byobRequest) {
                const view = controller.byobRequest.view
      
                const bytesRead = generateDateInto(view.buffer, 100, view.byteLength);
  
                controller.byobRequest.respond(bytesRead)
              } else {
                const buffer = new ArrayBuffer(DEFAULT_CHUNK_SIZE);
    
                const bytesRead = generateDateInto(buffer, 100, DEFAULT_CHUNK_SIZE);
  
                controller.enqueue(new Uint8Array(buffer, 0, bytesRead));
              }

              resolve();
              
              return creating();
            });
          }
  
          creating();
        },
      });
    }

    it('should be possible to read with byod a readable push byte stream', async () => {
      const stream = getByteStream();
      let buffer = new ArrayBuffer(4000);
      let offset = 0;
  
      const reader = stream.getReader({ mode: 'byob' });

      async function reading() {
        const { value, done } = await reader.read(new Uint8Array(buffer, offset));
        
        if (done) return done;
        
        buffer = value.buffer;
        offset += value.byteLength;

        if (offset > buffer.byteLength) done;

        return await reading();
      }

      const done = await reading();

      expect(done).toBe(true);
    });

    it('should be possible to create a readable push byte stream', async () => {
      const stream = getByteStream();
  
      const reader = stream.getReader();
      await reader.read(); 
      const { value } = await reader.read(); 
      expect(value).instanceOf(Uint8Array);
    });
  });
});
