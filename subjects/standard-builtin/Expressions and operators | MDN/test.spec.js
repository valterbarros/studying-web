import { expect, it, describe } from 'vitest'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}

describe('Expressions and operators', () => {
  describe('Bitwise', () => {
    it('should move from left operand to right 2 bits without sign propagation', () => {
      const a = -9;
      const b = -2;
  
      expect(Number(a >>> b).toString(2)).toBe('11');
    });
    it('should move from left operand to right 2 bits with sign propagation', () => {
      const a = -9;
      const b = -2;
  
      expect(Number(a >> b).toString(2)).toBe('-1');
    });
    it('should OR | operator check each bit and if one of is 1 returns 1', () => {
      const bit1 = 0b011;
      const bit2 = 0b010;
      const result = 0b011;

      expect(bit1 | bit2).toBe(result)
    });
    it('shoud XOR ^ returns 1 when one operand bit is 1 but not both', () => {
      const bit1 = 0b011;
      const bit2 = 0b010;
      const result = 0b001;

      expect(bit1 ^ bit2).toBe(result)
    });
    it('shoud AND & returns 1 when both corresponding bit from operands is 1', () => {
      const bit1 = 0b011;
      const bit2 = 0b010;
      const result = 0b010;

      expect(bit1 & bit2).toBe(result)
    });
    it('shoud NOT ~ return 1 when the corresponing bit is 0 and 0 otherwise', () => {
      const bit1 = 0b011;
      // the first bits of number is sign and those is NOT too, because that the sign is inverted - to + or vice-versa
      const result = -0b100;

      expect(~bit1).toBe(result)
    });
  });
  describe('Destructuring', () => {
    it('should be possible swap variable using destructuring', () => {
      let var1 = 1;
      let var2 = 2;
      [var1, var2] = [var2, var1];
  
      expect(var1).toBe(2)
      expect(var2).toBe(1)
    });
    it('should be possible reorder array using destructuring', () => {
      const arr = [1,2,3,4,5];
      [arr[0], arr[1], arr[4], arr[2]] = [arr[4], arr[2], arr[0], arr[1]];
  
      expect(arr).toEqual([5,3,2,4,1])
    });
    it('should be possible to assign to a array item using destructuring', () => {
      const array = [0,1,2,3];

      const obj = { a: 1, b: 2 };
      ({ a: array[0], b: array[1] } = obj);

      expect(array).toEqual([1,2,2,3]);
    });
    it('should be possible to get a nested property from object inside array', () => {
      const items = [
        { number: 1 },
        { number: 2 },
      ];

      const [, { number }] = items;

      expect(number).toBe(2);
    });
  });

  it('should be not possible to sum a Number with Bigint', () => {
    expect(() => 1n + 2).toThrowError();
  });

  it('should typeof return type from element', () => {
    expect(typeof 1).toBe('number');
    expect(typeof (new Date())).toBe('object');
    expect(typeof '').toBe('string');
    expect(typeof (() => {})).toBe('function');
  });

  it('should be possible to check if a var exist', () => {
    expect(typeof someNotExistVar).toBe('undefined');
  });

  describe('Equality comparation', () => {
    const getParams = (expectations) => [
      [-0, +0],
      [1, '1'],
      [true, 1],
      ['a', new String('a')],
      [NaN, NaN],
    ].map((params, index) => [...params, expectations[index]])

    it.each(getParams([true, false, false, false, false]))('should strict equality not run type convertion', (a, b, exp) => {
      expect(a === b).toBe(exp);
    });

    it.each(getParams([true, true, true, true, false]))('should loose equality perform type convertion', (a, b, exp) => {
      expect(a == b).toBe(exp)
    });

    it.each(getParams([false, false, false, false, true]))('should same-value equality perform type convertion', (a, b, exp) => {
      expect(Object.is(a, b)).toBe(exp)
    });

    it.each(getParams([true, false, false, false, true]))('should same-value-zero equality perform type convertion', (a, b, exp) => {
      expect(sameValueZero(a, b)).toBe(exp)
    });
  });
});
