import { expect, it, describe } from 'vitest'

describe('Object.isSealed', () => {
  it('should seal object', () => {
    const obj = { a: 2, b:1 };

    Object.seal(obj);

    expect(Object.isSealed(obj)).toBe(true);
    expect(() => obj.a = 1).not.toThrowError(TypeError);
    expect(() => delete obj.a).toThrowError(TypeError);
  });
});
