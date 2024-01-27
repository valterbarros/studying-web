import { expect, it, describe, beforeEach } from 'vitest'

describe('setPrototypeOf', () => {
  it('should ConstructorFunction.prototype.constructor become a property of [[Prototype]]', () => {
    function Base() {}

    console.dir(new Base)

    expect((new Base()).constructor).toBe(Base);
  });
});
