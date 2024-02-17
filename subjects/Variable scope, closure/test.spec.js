"use strict";

import { expect } from 'vitest'
import { paramFn } from '.';

describe('Variable scope, closure', () => {
  it('should acess vars from outter function when passed as parameter', () => {
    const main = (fn) => {
      return fn();
    }

    expect(main(paramFn)).toBe('valter');
  });

  it('should not change variable value of outer Lexical Environment', () => {
    const makCounter = () => {
      let count = 0;

      return {
        up: () => ++count,
        getCounter: () => count,
      }
    }

    const { up, getCounter } = makCounter();

    expect(up()).toBe(1);
    expect(up()).toBe(2);
    expect(getCounter()).toBe(2);
  });

  it('should have same count value between inner functions', () => {
    const Counter = function () {
      let count = 0;

      this.up = function() {
        return ++count;
      }

      this.down = function() {
        return --count;
      }
    }

    const counter = new Counter();

    expect(counter.up()).toBe(1)
    expect(counter.up()).toBe(2)
    expect(counter.up()).toBe(3)
    expect(counter.down()).toBe(2)
  });

  it('use closure to control generator internal value', () => {
    const makeGen = function(initial) {
      let value = initial;
    
      function* gen() {
        while(true) {
          value += 1
          yield value
        }
      }
    
      return {
        setValue: (newValue) => value = newValue,
        getGen: () => gen()
      }
    }
    
    const { getGen, setValue } = makeGen(2);
    
    getGen().next().value
    getGen().next().value
    
    expect(getGen().next().value).toBe(5);
    
    setValue(0)
    getGen().next().value
    
    expect(getGen().next().value).toBe(2);
  });
});
