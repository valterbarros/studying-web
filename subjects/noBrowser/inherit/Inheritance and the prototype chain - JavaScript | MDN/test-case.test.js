import { expect, it, describe } from 'vitest';
import { createBox, objInherit } from '.';
import { objBase } from './index';

describe('objInherit', () => {
  it('should return child propery when it exist (property shadowing)', () => {
    expect(objInherit.a).toBe(10);
    expect(objInherit.b).toBe(5);
  });

  it('', () => {
    expect(objInherit.methodA()).toBe(11);
  });
});

describe(createBox.name, () => {
  it('should pass getWidth through inherit in all instances', () => {
    expect(new createBox()).toHaveProperty('getWidth');
    expect(new createBox()).toHaveProperty('getWidth');
    expect(new createBox()).toHaveProperty('getWidth');
  });
  
  it('should return constructor as original function', () => {
    expect(createBox.prototype.constructor).toBe(createBox);
    expect(Object.getPrototypeOf(new createBox())).toBe(createBox.prototype);
  });
});

describe('arrow function', () => {
  it('should not have prototype', () => {
    const arrow = () => {};

    expect(arrow.prototype).toBeUndefined();
  });
});

describe('Destructuring', () => {
  it('should look up for properties on prototype chain', () => {
    const { c } = objInherit

    expect(c).toBe(objBase.c);
  });
});