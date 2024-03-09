import { expect } from "vitest";
import { Base, buildClass } from "../index";

describe('Class inheritance', () => {
  it('should obj be instance of class', () => {
    const Derivated = buildClass(Base);

    expect(new Derivated()).instanceOf(Derivated)
    expect(Object.getPrototypeOf(new Derivated())).toBe(Derivated.prototype)
    expect(new Derivated()).instanceOf(Base)
  });

  it('should be possible to change instanceof behavior', () => {
    class Overwrite {
      run() {}
      static [Symbol.hasInstance](obj) {
        return Object.hasOwn(Object.getPrototypeOf(obj), 'run');
      }
    }

    Object.setPrototypeOf(Base.prototype, Overwrite.prototype);
    const base = new Base();
    const over = new Overwrite();

    expect(base).not.instanceOf(Overwrite);
    expect(over).instanceOf(Overwrite);
  });
});
