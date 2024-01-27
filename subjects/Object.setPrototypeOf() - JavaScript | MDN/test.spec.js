import { expect, it, describe, beforeEach } from 'vitest'

describe('setPrototypeOf', () => {
  it('should accept same object as new prototype', () => {
    const base = {a: 1};
    const obj = { __proto__: base }

    expect(Object.setPrototypeOf(obj, base)).toBe(obj);
  });
  it('should return error on Object.prototype', () => {
    expect(() => Object.setPrototypeOf(Object.prototype, {})).toThrow(TypeError);
  });

  describe('extending a function', () => {
    it('should inherit properties', () => {
      function Human(name) {
        this.name = name;
      }

      Human.prototype.toStringParse = function () {
        return 'Human class';
      }

      function SuperHero() {
        console.log(this.name);
      }

      Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

      expect(new SuperHero('Batman').toStringParse()).toBe('Human class');
      expect(Object.getPrototypeOf(SuperHero.prototype)).toBe(Human.prototype);
    });
  });
});
