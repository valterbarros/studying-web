import { expect, it, describe } from 'vitest'

describe('WeakMap and WeakSet', () => {
  describe('WeakMap', () => {
    it('should only be possible to add objects as keys', () => {
      const weak = new WeakMap();
      let user = { name: 'user' }

      expect(() => weak.set(user, 1)).not.toThrowError();
      expect(() => weak.set('string', 1)).toThrowError();
    });
  });

  describe('WeakSet', () => {
    it('should only be possible to add objects as keys', () => {
      const weak = new WeakSet();
      let user = { name: 'user' }

      expect(() => weak.add(user, 1)).not.toThrowError();
      expect(() => weak.add('string', 1)).toThrowError();
    });

    it('should binded this keep be reachable reference', () => {
      let obj = { a: 1 };

      const weak = new WeakSet();
      weak.add(obj)

      function ensure() {
        expect(weak.has(this))
        expect(obj).toBeNull();
      }

      const binded = ensure.bind(obj);

      setTimeout(binded);

      obj = null;
    });
  });
});
