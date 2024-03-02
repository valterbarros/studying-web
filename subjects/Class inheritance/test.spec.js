import { expect } from "vitest";
import { Derivated } from ".";

describe('Class inheritance', () => {
  it('should inheritance accept function', () => {
    expect(new Derivated()).toHaveProperty('value');
  });

  it('should be possible to call a parent method', () => {
    expect(new Derivated().sum()).toEqual(2);
  });

  it('should be possible to use super inside literal objects', () => {
    const Base = {
      sum() {
        return 1 + 1
      }
    }

    const Derivated = {
      __proto__: Base,
      sum() {
        return super.sum();
      }
    }

    expect(Derivated.sum()).toEqual(2);
  });

  it('should be possible to override a constructor', () => {
    const Base = class {
      constructor() {
        this.a = 1
      }
    }

    class Derivated extends Base {
      constructor() {
        // super()
        this.z = 2
      }
    }

    expect(() => new Derivated()).not.toThrowError();
  });

  it('should be possible to inherit static method and property', () => {
    class Base1 {
      static customName = 'base';
      static getName() {
        return this.customName;
      }
    }

    class Derivated2 extends Base1 {}

    expect(Derivated2.customName).toEqual('base');
    expect(Derivated2.getName()).toEqual('base');
  });

  it('should be possible to add a private property', () => {
    class PrivateProperty {
      #priv = 12

      getPriv() {
        return this.#priv
      }
    }

    const priv = new PrivateProperty();

    expect(PrivateProperty.prototype).not.toHaveProperty('#priv');
    expect(PrivateProperty.prototype).not.toHaveProperty('priv');
    expect(priv.getPriv()).toEqual(12);
  });
});
