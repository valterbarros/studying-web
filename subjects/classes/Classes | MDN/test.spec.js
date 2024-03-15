import { expect, beforeEach } from "vitest";
import { buildClass } from "../index";

describe('Class basic syntax', () => {
  beforeEach(() => {
    vi.resetModules();
  })

  it('should not be possible to construct a method definition', () => {
    const C = buildClass();

    expect(() => new C.prototype.getPriv()).toThrowError();
  });

  it('should be possible to define a set using defineProperty', () => {
    const Base = buildClass();
    let value = 0

    Object.defineProperty(Base.prototype, 'setter', {
      set(val) {
        value = val;
        console.log('value');
        return true
      },
    });

    const inst = new Base();
    inst.setter = 10

    expect(value).toBe(10);
  });

  it('should be possible to access a property created by the base class', () => {
    const Base = class {
      property = 10;
    };

    const Derivated = class extends Base{
      property = this.property
    };

    expect((new Derivated()).property).toBe(10);
  });

  it('should each new instance has new function reference of field', () => {
    class Base1 {
      propObj = {}
      method1() {}
      classFieldMethod = () => {}
    }

    const inst1 = new Base1();
    const inst2 = new Base1();

    expect(inst1.method1 === Base1.prototype.method1).toBe(true)
    expect(inst2.method1 === Base1.prototype.method1).toBe(true)
    expect(inst2.method1 === inst2.method1).toBe(true)

    expect(inst1.propObj === Base1.prototype.propObj).toBe(false)

    expect(inst1.classFieldMethod === Base1.prototype.classFieldMethod).toBe(false)
  });

  it('should be able to create static computed field', () => {
    const expre = 'a1';

    class StaticField {
      static [expre](){}
    }

    expect(StaticField).toHaveProperty('a1')
  });
  it('should be possible to add static initialization', () => {
    class StaticInitializaton {
      static prop = 'prop'
      static {
        super.prop = 'Prop Changed'
      }
    }

    expect(StaticInitializaton.prop).toBe('Prop Changed')
  });
  it('should be possible to check if a obj has a private var', () => {
    const HasPrivate = buildClass();

    expect(HasPrivate.hasPrivProperty(new HasPrivate)).toBe(true);
  });

  it('should public instance methods fields be added to prototype', async () => {
    const Derivated = buildClass(class { method() {} });

    expect(Derivated.prototype).toHaveProperty('method')
  });
});
