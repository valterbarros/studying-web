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
});
