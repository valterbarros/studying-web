import { expect } from "vitest";
import { Base, BaseClass, BaseObj, DerivatedObj, buildClass } from "../index";

describe('Class inheritance', () => {
  it('should inheritance accept function', () => {
    const Derivated = buildClass(Base);

    expect(new Derivated()).toHaveProperty('value');
  });

  it('should be possible to call a parent method', () => {
    const Derivated = buildClass(Base);

    expect(new Derivated().sum()).toEqual(2);
  });

  it('should be possible to use super inside literal objects', () => {
    expect(DerivatedObj.sum()).toEqual(2);
  });

  it('should method come from from prototype chain', () => {
    expect(DerivatedObj.getMethod()).toBe(BaseObj.getMethod);
  });

  it('should be possible to override a constructor', () => {
    class CustomDerivated extends Base {
      constructor() {
        super(...arguments)
        this.z = 2
      }
    }

    expect(() => new CustomDerivated()).not.toThrowError();
  });

  it('should be possible to inherit static method and property', async () => {
    const DerivatedChanged = buildClass(BaseClass);

    expect(DerivatedChanged.customName).toEqual('base');
    expect(DerivatedChanged.getName()).toEqual('base');
    expect(new DerivatedChanged().getInherited()).toEqual('prop');
    expect(new DerivatedChanged().getName()).toEqual('base');
  });

  it('should be possible to add a private property', () => {
    const Derivated = buildClass(Base);

    const d = new Derivated();

    expect(Derivated.prototype).not.toHaveProperty('#priv');
    expect(Derivated.prototype).not.toHaveProperty('priv');
    expect(d.getPriv()).toEqual(12);
  });
});
