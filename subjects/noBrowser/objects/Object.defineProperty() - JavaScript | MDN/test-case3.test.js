import { Base, objectNotWritableAndNotConfigurable, objectWritableAndConfigurable } from ".";
import { expect, it, describe, beforeEach } from 'vitest'

describe('Object.defineProperty()', () => {
  beforeEach(() => {
    Object.defineProperty(objectNotWritableAndNotConfigurable, 'property1', {
      value: 42,
      writable: false,
      configurable: false,
      enumerable: false,
    });
    
    Object.defineProperty(objectWritableAndConfigurable, 'property1', {
      value: 42,
      writable: true,
      configurable: true
    });
  });

  it('should throw an error when write and configurable are false', () => {
    expect(Object.keys({...objectNotWritableAndNotConfigurable})).toEqual([]);
    expect(() => objectNotWritableAndNotConfigurable.property1 = 33).toThrowError(TypeError);
    expect(() => delete objectNotWritableAndNotConfigurable.property1).toThrowError(TypeError);
  });
  
  it('should throw an error when try to modify property of a not configurable object', () => {
    const operation = () => {
      Object.defineProperty(objectNotWritableAndNotConfigurable, 'property1', {
        value: 1
      });
    }
    expect(operation).toThrowError(TypeError);
  });

  it('should throw an error when try to modify type of a not configurable object', () => {
    const operation = () => {
      Object.defineProperty(objectWritableAndConfigurable, 'property1', {
        get: () => 1
      });
    }

    expect(operation).not.toThrowError(TypeError);
  });

  it('should enable re-assign on object of writable true', () => {
    expect(() => objectWritableAndConfigurable.property1 = 25).not.toThrowError(TypeError);
  });

  describe('acessor property inherited', () => {
    it('should call get and set from inherited', () => {
      let insideSet = 0;
      let aux = 0
      Object.defineProperty(Base.prototype, 'inheritedProperty', {
        get: () => aux,
        set(value) {
          insideSet++;
          aux = value
        }
      });

      const b = new Base();
      b.inheritedProperty += 1;

      function Derived() {}

      Derived.prototype = Object.create(Base.prototype, { constructor: { value: Derived } });

      const d = new Derived();
      d.inheritedProperty += 1;

      expect(insideSet).toBe(2);
    });
  });
});
