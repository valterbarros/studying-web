import { expect, it, describe } from 'vitest'
import { Base, Child, Thing } from '.';

describe('isPrototypeOf', () => {
  it('should check in prototype chain', () => {
    const c = new Child();

    expect(Base.prototype.isPrototypeOf(c)).toBe(true);
  });
});