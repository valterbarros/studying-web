// import { expect, describe } from 'vitest'

import { expect } from "vitest";

describe('Class basic syntax', () => {
  it('should class be function typeof', () => {
    class Point {}

    expect(typeof Point).toBe('function');
  });

  it('should be possible create class without name', () => {
    expect(() => class {}).not.toThrowError();
  });

  it('should class fields be not added to prototype', () => {
    class Point {
      x = 0
    }

    Point.prototype.y = 10

    expect(Point.prototype).not.toHaveProperty('x')
    expect(Point.prototype).toHaveProperty('y')
  });

  it('should not lost this when passed method as function', () => {
    class Point {
      x = 10
      y = 20
      sum = () => {
        return this.x + this.y
      }
    }

    const point = new Point();
    const { sum } = point;

    expect(sum()).toEqual(30)
  });
});
