// import { expect, describe } from 'vitest'

import { expect } from "../../node_modules/vitest/dist/index";

describe('Function object, NFE', () => {
  it('should new instance', () => {
    function Point(x,y) {
      this.x = x;
      this.y = y;
    }

    expect(new Point(0,2)).toHaveProperty('x');
    expect(new Point(0,2)).toHaveProperty('y');
  });
  
  it('should replace this value when non primitive is returned', () => {
    function Point(x,y) {
      this.x = x;
      this.y = y;

      return {
        z: 1
      }
    }

    expect(new Point(0,2)).toHaveProperty('z');
  });

  it('should dont override value of this when primitive is returned', () => {
    function Point(x,y) {
      this.x = x;
      this.y = y;

      return 10
    }

    expect(new Point(0,2)).toHaveProperty('x');
    expect(new Point(0,2)).toHaveProperty('y');
  });

  it('should object constructed with Reflect.construct return newTarget as new.target', () => {
    function Point(x,y) {
      console.log('Point')
      this.x = x;
      this.y = y;
    }
    
    Point.prototype.sum = 5
    
    function newTarget(x, y) {
      console.log('newTarget')
      this.z = 10
    }
    
    newTarget.prototype.value = 2
    
    const point = Reflect.construct(Point, [0,1], newTarget);
    
    expect(point).not.toBeInstanceOf(Point);
    expect(point).toBeInstanceOf(newTarget);
    expect(Object.getPrototypeOf(point)).toHaveProperty('value');
    expect(Object.getPrototypeOf(point)).not.toHaveProperty('sum');
  });
});
