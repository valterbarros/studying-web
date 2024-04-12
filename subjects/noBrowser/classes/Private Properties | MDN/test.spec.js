import { expect, beforeEach } from "vitest";
import { buildClass } from "../index";

describe('Class basic syntax', () => {
  beforeEach(() => {
    vi.resetModules();
  })

  it('should be possible to check if a obj has a private var', () => {
    const HasPrivate = buildClass();

    expect(HasPrivate.hasPrivProperty(new HasPrivate)).toBe(true);
  });

  it('should private instance methods fields be not added to prototype', async () => {
    const Derivated = buildClass(class { #method() {} });

    expect(Derivated.prototype).not.toHaveProperty('method')
  });

  it('should this inside static method refer subclass not super class', () => {
    const Derivated = buildClass(class Testa{
      static #prop = 1;

      static getProp() {
        return this.#prop;
      }
    });

    expect(() => Derivated.getProp()).toThrowError();
  });
});
