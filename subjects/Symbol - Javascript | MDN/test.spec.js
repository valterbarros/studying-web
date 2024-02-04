import { expect, it, describe } from 'vitest'

describe('Symbol.keyFor()', () => {
  it('should private symbol property unless you use getOwnPropertySymbols to get symbol ref', () => {
    const name = Symbol('name');

    const obj = {
      [name]: 'valter'
    }

    const [name2] = Object.getOwnPropertySymbols(obj);

    expect(obj[name2]).toBe('valter');
  });

  it('should each symbol be different', () => {
    const sym1 = Symbol();
    const sym2 = Symbol();

    expect(sym1).not.toEqual(sym2);
  });
});
