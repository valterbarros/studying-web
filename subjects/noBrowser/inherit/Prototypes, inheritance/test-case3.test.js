import { Derived, Base, InheritFunction, admin as adminObj } from ".";
import { expect, it, describe } from 'vitest'

describe('Prototypes, inheritance', () => {
  it('should write directly to inherited object', () => {
    expect(adminObj.fullName).toBe('John Smith');
    adminObj.fullName = 'Alice Cooper';
    expect(adminObj.fullName).toBe('Alice Cooper');
  });

  it('should prototype instance be immutable', () => {
    const obj1 = new InheritFunction();
    expect(obj1.name).toBe('inherited name');

    InheritFunction.prototype = { name: 'new name' };

    expect(obj1.name).toEqual('inherited name');

    expect((new InheritFunction()).name).toBe('new name');
  });

  it('should constructor be Derived', () => {
    expect(new Derived).instanceOf(Derived);
    expect((new Derived).run).toBeDefined();
  });
});
