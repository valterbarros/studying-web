import { expect, it, describe } from 'vitest'
import { Base, Base2, BoundBase, Class1, Generalist, Medium } from '.';

describe('instanceof', () => {
  it('should check in prototype chain if is instance of', () => {
    const res = new Class1();
    expect(res).toBeInstanceOf(Base);
    expect(res).toBeInstanceOf(Medium);
    expect(res).toBeInstanceOf(Object);
  });
  
  it('should work with bound functions', () => {
    const res = new Base2();
    expect(res).instanceOf(BoundBase)
  });

  it('should accept custom check', () => {
    const obj = {
      [Generalist.isInstanceFlag]: true
    }

    expect(obj).toBeInstanceOf(Generalist)
  });
});
