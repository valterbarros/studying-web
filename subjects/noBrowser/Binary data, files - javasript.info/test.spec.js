import { FileReader } from "blob-polyfill";

describe('Binary data, files', () => {
  it('should not possible to acess data as normal array', () => {
    const buffer = new ArrayBuffer(16);

    expect(buffer[0]).toBeUndefined();
  });
  
  it('should be possible to acess values from arrayBuffer with a TypedArray', () => {
    const buffer = new ArrayBuffer(16);

    const view = new Uint8Array(buffer);
  
    expect(view[0]).toBe(0);
  });

  it('should be possible to pass a normal array to TypedArray', () => {
    const arr = new Uint8Array([5,4,3]);

    expect(arr[0]).toBe(5);
  });

  it('should Uint8Array threat each byte from buffer as a number from 0 to 255', () => {
    // return only the rightmost 8 bits

    const arr = new Uint8Array([5,4,3]);

    const view = new Uint8Array(arr);

    view[0] = 255;
    view[1] = 300;

    expect(view[0]).toBe(255);
    expect(view[1]).toBe(44);
  });

  it('should be possible to use those methods', () => {
    const arr = new Uint8Array([5,4,3]);

    expect(arr.map.toString()).includes('map');
    expect(arr.slice.toString()).includes('slice')
    expect(arr.find.toString()).includes('find')
    expect(arr.reduce.toString()).includes('reduce')
    expect(arr.set.toString()).includes('set')
    expect(arr.subarray.toString()).includes('subarray')
  });

  it('should be possible to use DataView', () => {
    let buffer = new Uint8Array([255, 255, 255, 255]).buffer;

    let dataView = new DataView(buffer);

    expect(dataView.getUint8(0)).toBe(255);
    expect(dataView.getUint16(0)).toBe(65535);
  });

  describe('TextDecoder/Encoder', () => {
    it('should be possible to use TextDecoder to decoder a TypedArray', () => {
      const view = new Uint8Array([72, 101, 108, 108, 111]);

      const decoder = new TextDecoder();

      expect(decoder.decode(view)).toBe('Hello')
    });

    it('should be possible to use TextEnconder to encoder a text', () => {
      const encoder = new TextEncoder();

      expect(String.fromCharCode(encoder.encode('Hello')[0])).toBe('H');
    });
  });

  describe('Blob and Files', () => {
    it('should be possible to create a Blob from arrayBuffer', () => {
      const blob = new Blob(new Uint8Array([255]), { type: 'text/html' } );

      expect(blob.type).toBe('text/html');
    });

    it('should be possible to create a blob from text', () => {
      const encoder = new TextEncoder();

      const buffer = encoder.encode('hello')

      const blob = new Blob(buffer, { type: 'text/html' })

      expect(blob.type).toBe('text/html');
    });


    it('should return stream from blob', async () => {
      const blob = new Blob(new Uint8Array([255, 133]), { type: 'text/html' } );

      const readableStream = blob.stream()

      const stream = readableStream.getReader();

      let { done, value } = await stream.read();

      expect(value[Symbol.toStringTag]).toBe('Uint8Array');

      while (!done) {
        ({ done, value } = await stream.read());
      }

      expect(done).toBe(true);
    });

    it('should be possible to get array buffer from blob', async () => {
      const blob = new Blob(new Uint8Array([255]), { type: 'text/html' } );

      const buffer = await blob.arrayBuffer()

      expect(buffer.toString()).toBe('[object ArrayBuffer]');
    });

    it('should be File inherits from Blob', () => {
      expect(Object.getPrototypeOf(File)).toBe(Blob)
    });

    it('should be possible to use FileReader to read blob content', async () => {
      expect.hasAssertions();
      const encoder = new TextEncoder();

      const buffer = encoder.encode('hello')

      const blob = new Blob(buffer, { type: 'text/html' })

      const reader = new FileReader(blob);

      await new Promise((resolve) => {
        reader.onload = () => {
          expect(reader.result).toBe('104101108108111')
          resolve();
        }

        reader.readAsText(blob);
      })
    });
  });
});
