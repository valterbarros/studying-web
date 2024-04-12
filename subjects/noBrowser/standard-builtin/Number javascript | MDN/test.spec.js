import { expect, it, describe } from 'vitest'

function equal(a,b, tolerance = Number.EPSILON) {
  return Math.abs(a - b) < tolerance;
}

describe('Numbers', () => {
  describe('map', () => {
    it('should be 1/3 not exactly precise', () => {
      expect(0.1 + 0.2).not.toEqual(0.3);
    });
    it('should be exactly precise', () => {
      expect(0.1 + 0.3).toEqual(0.4);
    });
    it('should be return EPSILON to check equality', () => {
      expect(equal(0.1 + 0.2, 0.3)).toBe(true);
    });
    it('should EPSILON lost accuracy', () => {
      const a = 1000.1
      const b = 1000.2
      const total = 1000.3

      expect(equal(a + b, total)).toBe(false);
    });
    it('should parse number to float', () => {
      const numberStr = '+00025.45';
      expect(Number.parseFloat(numberStr)).toBe(25.45);
      const numberObj = {
        toString() {
          return '21.49'
        }
      }

      expect(Number.parseFloat(numberObj)).toBe(21.49)
    });
    it('should parse a number to int', () => {
      const numberStr = '+00025.45';
      expect(Number.parseInt(numberStr)).toBe(25);
      const numberObj = {
        toString() {
          return '21.49'
        }
      }

      expect(Number.parseInt(numberObj)).toBe(21)
    });
    it('should return two decimal point', () => {
      const number = 10.45324233343
      expect(number.toFixed(2)).toBe("10.45")
    });
  });
});