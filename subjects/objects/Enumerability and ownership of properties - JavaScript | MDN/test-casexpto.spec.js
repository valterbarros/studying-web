import { expect, it, describe, beforeEach } from 'vitest'

describe('Object.defineProperty()', () => {
  describe('Querying object properties', () => {
    it('propertyIsEnumerable', () => {
      const obj = { a: 2, __proto__: { b: 1 } };

      Object.defineProperty(obj, 'c', { enumerable: false });

      expect(Object.prototype.propertyIsEnumerable.call(obj, 'a')).toBe(true);
      expect(Object.prototype.propertyIsEnumerable.call(obj, 'b')).toBe(false);
      expect(Object.prototype.propertyIsEnumerable.call(obj, 'c')).toBe(false);
    });
    it('hasOwnProperty', () => {
      const obj = { a: 2, __proto__: { b: 1 } };

      Object.defineProperty(obj, 'c', { enumerable: false });

      expect(Object.prototype.hasOwnProperty.call(obj, 'a')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(obj, 'b')).toBe(false);
      expect(Object.prototype.hasOwnProperty.call(obj, 'c')).toBe(true);
    });
    it('Object.hasOwn', () => {
      const obj = { a: 2, __proto__: { b: 1 } };

      Object.defineProperty(obj, 'c', { enumerable: false });

      expect(Object.prototype.hasOwnProperty.call(obj, 'a')).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(obj, 'b')).toBe(false);
      expect(Object.prototype.hasOwnProperty.call(obj, 'c')).toBe(true);
    });
    it('in', () => {
      const obj = { a: 2, __proto__: { b: 1 } };
      const arr = [1,2,3]

      Object.defineProperty(obj, 'c', { enumerable: false });

      expect('a' in obj).toBe(true);
      expect('b' in obj).toBe(true);
      expect('c' in obj).toBe(true);
      expect(0 in arr).toBe(true);
    });
  });

  describe('Traversing object properties', () => {
    it('Object.keys, Object.values, Object.entries', () => {
      const obj = { a: 2, __proto__: { b: 1 } };

      Object.defineProperty(obj, 'c', { enumerable: false });

      expect(Object.keys(obj)).toEqual(['a']);
      expect(Object.values(obj)).toEqual([2]);
      expect(Object.entries(obj)).toEqual([['a', 2]]);
    });

    it('Object.getOwnPropertyNames', () => {
      const obj = { a: 2, __proto__: { b: 1 } };

      Object.defineProperty(obj, 'c', { enumerable: false });

      expect(Object.getOwnPropertyNames(obj)).toEqual(['a', 'c']);
    });

    it('Object.getOwnPropertySymbols', () => {
      const d = Symbol('d');

      const obj = { a: 2, __proto__: { b: 1 }, [d]: 3 };

      Object.defineProperty(obj, 'c', { enumerable: false });

      expect(Object.getOwnPropertySymbols(obj)).toEqual([d]);
    });

    it('Object.getOwnPropertyDescriptors', () => {
      const d = Symbol('d');

      const obj = { a: 2, __proto__: { b: 1 }, [d]: 3 };

      Object.defineProperty(obj, 'c', { enumerable: false });

      expect(Object.getOwnPropertyDescriptors(obj)).toEqual({
        a: {
          value: 2,
          writable: true,
          enumerable: true,
          configurable: true
        },
        c: {
          value: undefined,
          writable: false,
          enumerable: false,
          configurable: false
        },
        [d]: {
          value: 3,
          writable: true,
          enumerable: true,
          configurable: true
        }
      });
    });
    it('Reflect.ownKeys', () => {
      const d = Symbol('d');

      const obj = { a: 2, __proto__: { b: 1 }, [d]: 3 };

      Object.defineProperty(obj, 'c', { enumerable: false });

      expect(Reflect.ownKeys(obj)).toEqual(['a', 'c', d]);
    });
    it('for in', () => {
      const d = Symbol('d');

      const obj = { a: 2, __proto__: { b: 1 }, [d]: 3 };

      Object.defineProperty(obj, 'c', { enumerable: false });

      const keys = ['a', 'b'];
      let aux = 0

      for (let property in obj) {
        expect(property).toBe(keys[aux]);
        aux++
      }
    });
    it('Object.assign', () => {
      const d = Symbol('d');
  
      const obj = { a: 2, __proto__: { b: 1 }, [d]: 3 };
  
      Object.defineProperty(obj, 'c', { enumerable: false });
  
      expect(() => Object.assign(obj, {c: 1})).toThrowError(TypeError);
      expect(() => Object.assign(obj, {a: 5})).not.toThrowError(TypeError);
      expect(() => Object.assign(obj, {[d]: 5})).not.toThrowError(TypeError);
      expect(() => Object.assign(obj, {b: 5})).not.toThrowError(TypeError);
    });
    it('...', () => {
      const d = Symbol('d');
  
      const obj = { a: 2, __proto__: { b: 1 }, [d]: 3 };
  
      Object.defineProperty(obj, 'c', { enumerable: false });
  
      expect(() => ({...obj, c: 1 })).not.toThrowError(TypeError);
      expect(() => ({...obj, a: 5})).not.toThrowError(TypeError);
      expect(() => ({...obj, [d]: 5})).not.toThrowError(TypeError);
      expect(() => ({...obj, b: 5})).not.toThrowError(TypeError);
    });
  });
});
