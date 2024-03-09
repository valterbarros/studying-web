"use strict";

import { expect } from 'vitest'

describe('Function object, NFE', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should to be possible to pass this context to a function', () => {
    function say() {
      return this.name
    }

    const user = { name: 'valter' };

    expect(say.call(user)).toBe('valter');
  });

  it('should make the function impossible to cause error', () => {
    function operation() {
      throw 'error'
    }

    function errorSafeDecorator(fn) {
      return function() {
        try {
          fn()
        } catch(e) {
          return false;
        }
      }
    }

    operation = errorSafeDecorator(operation);

    expect(operation).not.toThrowError();
    expect(operation()).toBe(false);
  });

  it('should .apply only accept array like as args', () => {
    function applying(...args) {
      return args[0];
    }

    expect(applying.apply(null, { 0: 1, length: 1 })).toBe(1);
  });

  it('should .call accept array like and iterables as args', () => {
    function applying(...args) {
      return args[0];
    }

    expect(applying.call(null, 1)).toBe(1);
  });


  it('should be possible to borrow an array method with an array like', () => {
    const like = { length: 3, 0: 1, 1: 2, 2: 3 };

    expect([].join.apply(like)).toBe('1,2,3')
  });

  it('should debounce function using decorator', () => {
    let params = [];

    function f(x) {
      params.push(x);
      return x;
    }
    
    function debounce(fn, time) {
      let timeId;
    
      const wrapper = function(...args) {
        clearTimeout(timeId);
    
        timeId = setTimeout(fn, time, ...args);
      }
    
      return wrapper;
    }
    
    const newF = debounce(f, 1000);
    
    newF("a");
    setTimeout(() => newF("b"), 200);
    setTimeout(() => newF("c"), 500);

    vi.runAllTimers();

    expect(params).toEqual(['c']);
  });
});
