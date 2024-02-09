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
    const arithmeticProgression = (n, step) => {
      return n * (n + 1) / step
    }
    
    expect(arithmeticProgression(2, 2)).toBe(3);
    expect(arithmeticProgression(4, 2)).toBe(10);
    expect(arithmeticProgression(100, 2)).toBe(5050);
  });

  it('should factorial number', () => {
    const factorial = (n) => {
      if (n === 1) return 1;

      return n * factorial(n - 1)
    }

    expect(factorial(5)).toBe(120);
  });

  it('should fibonacci number', () => {
    // const fibonacci = (n) => {
    //   if (n === 5) return 1
    //   if (n === 1) return fibonacci(1);

    //   return fibonacci(n - 2 + n - 1)
    // }

    const fibonacci = (n) => {
      let total = 0;
      const list = []
      for (let index = 1; index <= n; index++) {
        console.log(index, Math.max(index - 1 + index - 2, 1));
        total += Math.max(index - 1 + index - 2, 1);
        list.push(total)
        // console.log(total);
      }

      console.log(list);

      return total;
    }

    expect(fibonacci(7)).toBe(13);
  });
});
