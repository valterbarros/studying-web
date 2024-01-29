import { expect, it, describe } from 'vitest'

describe('Symbol.toPrimitive', () => {
  it('should respect the order valueOf and toString', () => {
    const obj = {
      a: 2,
      b:1,
      valueOf() {
        return 5;
      },
      toString() {
        return 'Hello'
      }
    };

    expect(+obj).toBe(5);
    expect(`${obj}`).toBe('Hello');
  });
  it('should toPrimitive has priority', () => {
    const obj = {
      a: 2,
      b:1,
      [Symbol.toPrimitive](hint) {
        if (hint === 'number') return 10;
        if (hint === 'string') return 'World';
        return true;
      },
      valueOf() {
        return 5;
      },
      toString() {
        return 'Hello'
      }
    };

    expect(+obj).toBe(10);
    expect(`${obj}`).toBe('World');    
  });

  it('toString should return a string or it would be ignored', () => {
    const obj = {
      toString() {
        return [1]
      },
      valueOf() {
        return 2;
      }
    }

    expect(+obj).toBe(2);
  });

  it('using to string to detect object class', () => {
    const toString = Object.prototype.toString;

    expect(toString.call(new Date)).toEqual('[object Date]');
  });
});
