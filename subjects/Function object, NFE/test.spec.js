"use strict";

import { expect } from 'vitest'

describe('Function object, NFE', () => {
  it('should function has length and name', () => {
    const main = (fn) => {
      return fn();
    }

    expect(main.name).toBe('main');
    expect(main.length).toBe(1);
  });

  it('should be possible to add property to a function', () => {
    function fn () {
      return fn.prop
    }

    fn.prop = 10

    expect(fn()).toBe(10);
  });

  it('should be possible to acess function from internal name ', () => {
    const outerName = function innerName(who) {
      if (who) return `Hello ${who}`
      else return innerName('Guest');
    }

    expect(outerName()).toBe('Hello Guest');
  });

  it('should pass function methods inside function property', () => {
    function makeCounter() {
      let value = 0;

      function counter() {
        return ++value;
      }

      counter.set = (value) => {
        return counter.value = value;
      }

      counter.decrease = (value) => {
        return --counter.value
      }

      return counter;
    }

    const counter = makeCounter();

    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
    expect(counter()).toBe(3);
    expect(counter.set(10)).toBe(10);
    expect(counter.decrease()).toBe(9);
  });
});
