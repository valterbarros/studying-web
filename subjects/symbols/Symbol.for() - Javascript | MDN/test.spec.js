import { expect, it, describe } from 'vitest'

describe('Symbol.keyFor()', () => {
  it('should return same reference', () => {
    const globalSym = Symbol.for('foo123'); // Global symbol
    const key = Symbol.keyFor(globalSym);

    expect(globalSym).toEqual(Symbol.for('foo123'));
  });
});
