import { expect, it, describe, beforeEach } from 'vitest'

describe('setPrototypeOf', () => {
  it('should ConstructorFunction.prototype.constructor become a property of [[Prototype]]', () => {
    function Base() {}

    expect((new Base()).constructor).toBe(Base);
  });
});
