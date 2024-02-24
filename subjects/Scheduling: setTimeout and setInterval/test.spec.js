"use strict";

import { expect } from 'vitest'

describe('Function object, NFE', () => {
  it('should to be possible to pass parameters to setTimeout function', () => {
    setTimeout((a, b) => {
      expect(a).toBe(1);
      expect(b).toBe(2);
    }, 0, 1, 2)
  });
});
