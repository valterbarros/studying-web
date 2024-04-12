import { expect, it, describe } from 'vitest'

describe('JavaScript data types and data structures', () => {
  it('should be dynamic type and weakly typed', () => {
    const operation = () => {
      let foo = 51;
      foo = 'bar';
      foo = { key: 'value' };

      const result = 1 + foo;
    }

    expect(operation).not.toThrowError();
  });

  it('typeof should return strange for null and undefined', () => {
    // undefined indicates the absence of a value
    expect(undefined).toBeTypeOf('undefined');
    // null indicates the absence of an object 
    expect(null).toBeTypeOf('object');
  });

  it('should NaN not equal to NaN ', () => {
    expect(NaN === NaN).toBe(false)
  });

  it('should not be possible to sum Number with bigint', () => {
    expect(() => 1 + 1n).toThrowError();
  });

  it('should concatene if one operand is string', () => {
    expect(1 + '1').toBe('11');
  });

  it('should convert object to primitive', () => {
    const obj = {
      valueOf() {
        return 1;
      },
    }
    expect(1 + obj).toBe(2);
  });

  it('should == be loosely equal', () => {
    expect(1 == '1').toBe(true);
  });

  it('should === be strict equal', () => {
    expect(1 === '1').toBe(false);
  });
});
