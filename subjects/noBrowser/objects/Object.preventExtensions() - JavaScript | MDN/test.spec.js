import { expect, it, describe } from 'vitest'

describe.skip('Object.preventExtensions', () => {
  it('should prevent extensions', () => {
    const obj = {b:1};

    Object.preventExtensions(obj);

    expect(() => obj.property2 = 33).toThrowError(TypeError);
    expect(() => obj.b = 1).not.toThrowError(TypeError);
    expect(() => Object.setPrototypeOf(obj, {})).toThrowError(TypeError);
    expect(Object.isExtensible(obj)).toBe(false);
    expect(() => delete obj.b).not.toThrowError(TypeError);
  });
});
