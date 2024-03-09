import { expect, beforeEach } from "vitest";
import { buildClass } from "../index";

describe('Class basic syntax', () => {
  beforeEach(() => {
    vi.resetModules();
  })

  it('should class be function typeof', () => {
    const Derivated = buildClass();
    expect(typeof Derivated).toBe('function');
  });

  it('should be possible create class without name', () => {
    expect(() => class {}).not.toThrowError();
  });

  it('should class fields be not added to prototype', async () => {
    const Derivated = buildClass();

    Derivated.prototype.y = 10

    expect(Derivated.prototype).not.toHaveProperty('customName')
    expect(Derivated.prototype).toHaveProperty('y')
  });

  it('should not lost this when passed method as function', () => {
    const Derivated = buildClass();
    const d = new Derivated();
    const { autoBoundFunction } = d;

    expect(autoBoundFunction()).toEqual(12)
  });
});
