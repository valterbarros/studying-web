import { expect } from "vitest";
import { Derivated, Base } from ".";

describe('Class inheritance', () => {
  it('should obj be instance of class', () => {
    expect(new Derivated()).instanceOf(Derivated)
    expect(Object.getPrototypeOf(new Derivated())).toBe(Derivated.prototype)
    expect(new Derivated()).instanceOf(Base)
  });

  it('should be possible to change instanceof behavior', () => {
    function Aux() {}

    class Overwrite {
      run() {}
      static [Symbol.hasInstance](obj) {
        return Object.hasOwn(Object.getPrototypeOf(obj), 'run');
      }
    }

    Object.setPrototypeOf(Aux.prototype, Overwrite.prototype);
    const aux = new Aux();
    const over = new Overwrite();

    expect(aux).not.instanceOf(Overwrite);
    expect(over).instanceOf(Overwrite);
  });
});
