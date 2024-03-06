"use strict";

import { expect } from 'vitest'

describe('Recussion and stack', () => {
  it('should sum numbers using recursion', () => {
    const sumTo = (n) => {
      if (n === 1) return 1;
      return n + sumTo(n - 1);
    }
    
    expect(sumTo(2)).toBe(3);
    expect(sumTo(4)).toBe(10);
    expect(sumTo(100)).toBe(5050);
  });

  it('should sum numbers using for loop', () => {
    const sumTo = (n) => {
      let sum = 0;

      for(let i = 1; i <= n; i++) {
        sum += i;
      }

      return sum;
    }

    expect(sumTo(5)).toBe(15);
    expect(sumTo(2)).toBe(3);
    expect(sumTo(4)).toBe(10);
    expect(sumTo(100)).toBe(5050);
  });

  // https://en.wikipedia.org/wiki/Arithmetic_progression
  it('should sum numbers using Arithmetic progression', () => {
    const arithmeticProgression = (n) => {
      return n * (n + 1) / 2
    }
    
    expect(arithmeticProgression(2)).toBe(3);
    expect(arithmeticProgression(4)).toBe(10);
    expect(arithmeticProgression(100)).toBe(5050);
  });

  it('should factorial number', () => {
    const factorial = (n) => {
      if (n === 1) return 1;

      return n * factorial(n - 1)
    }

    expect(factorial(5)).toBe(120);
  });

  it('should fibonacci number', () => {
    const fibonacciRecur = (n) => {
      if (n <= 1) return n

      return fibonacciRecur(n - 1) + fibonacciRecur(n - 2)
    }

    const fibonacciLoop = (n) => {
      let total = 0;
      const list = [1, 1]
      for (let index = 2; index < n; index++) {
        total = list[index - 1] + list[index - 2];
        list.push(total)
      }

      return total;
    }

    expect(fibonacciLoop(77)).toBe(5527939700884757);

    // not otimized
    // expect(fibonacciRecur(77)).toBe(5527939700884757);

    expect(fibonacciRecur(7)).toBe(13);
  });

  it('should output single linked list', () => {
    let list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };

    const printListRecur = (list) => {
      if (list.next) {
        printListRecur(list.next); // do the same for the rest of the list
      }
    }

    printListRecur(list)
  });

  it('should output single linked list in reverse', () => {
    let list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };

    const printListReverseRecur = (list) => {
      if (list.next) {
        printListReverseRecur(list.next); // do the same for the rest of the list
      }
    }

    printListReverseRecur(list)
  });
});
