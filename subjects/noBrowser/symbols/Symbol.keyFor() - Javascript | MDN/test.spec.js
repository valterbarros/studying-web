import { expect, it, describe } from 'vitest'

describe('Symbol.keyFor()', () => {
  it('should return key for a global symbol', () => {
    const globalSym = Symbol.for('foo123'); // Global symbol
    const key = Symbol.keyFor(globalSym);

    expect(key).toEqual('foo123')
  });
});
