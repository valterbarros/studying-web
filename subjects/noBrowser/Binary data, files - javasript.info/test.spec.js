import { FileReader } from "blob-polyfill";

describe('Binary data, files', () => {
  describe('TypedArray', () => {
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
      const arr = new Uint8Array([5,4,3]);
      
      const view = new Uint8Array(arr);
      
      view[0] = 255;
      view[1] = 300;
      
      // return only the rightmost 8 bits
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

    it('should be possible to create an arrayBuffer resizable', () => {
      const buf = new ArrayBuffer(8, { maxByteLength: 16 });

      expect(buf.byteLength).toBe(8);

      buf.resize(10)

      expect(buf.resizable).toBe(true);
      expect(buf.byteLength).toBe(10);
    });

    it('should clamp number to range 0 to 255', () => {
      const view = new Uint8ClampedArray([300, 500, 600]);

      expect([...view]).toEqual([255,255,255]);
    });

    it('should be possible to use array like methods to manipulate TypedArray', () => {
      const view = new Uint8ClampedArray([300, 500, 600]);

      expect([...view.map(() => 200)]).toEqual([200,200,200])
    });

    it('should be possible to change offset of TypedArray', () => {
      const buf = new ArrayBuffer(100);

      let view = new Uint8Array(buf, 20);
      view = new Uint8Array(buf, 30);
      view = new Uint8Array(buf, 40);

      expect(view.byteLength).toBe(60);
    });

    it('should be possible to length of TypedArray', () => {
      const buf = new ArrayBuffer(100);

      let view = new Uint8Array(buf);

      for (let index = 0; index < buf.byteLength; index++) {
        view[index] = index + 1;        
      }

      expect(view[99]).toBe(100);

      const lengthView = new Uint8Array(buf, 20, 80);

      expect(lengthView[81]).toBeUndefined();

      expect(lengthView[0]).toEqual(view[20]);
    });

    it('should be possible to detach a TypedArray', () => {
      const buf = new ArrayBuffer(100);

      buf.transfer();

      expect(buf.byteLength).toBe(0);
      expect(buf.detached).toBe(true);
    });
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

    it('should be possible to instantiate a File', () => {
      const file = new File(new Uint8Array([1]), 'file');
      expect(file.name).toBe('file');
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
