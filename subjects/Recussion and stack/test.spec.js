"use strict";

import { expect } from 'vitest'

describe('Recussion and stack', () => {
  it('should sum numbers', () => {
    const sumTo = (n) => {
      if (n === 1) return 1;
      console.log(sumTo(n - 1));
      return n + sumTo(n - 1);
    }
    
    // expect(sumTo(2)).toBe(3);
    expect(sumTo(4)).toBe(10);
    // expect(sumTo(100)).toBe(5050);
  });
});