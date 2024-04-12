import { expect, beforeEach } from "vitest";
import { buildClass, mixin } from "../index";

describe('class mixin', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('should be possible to add mixin methods to a class prototype', async () => {
    const Derivated = buildClass();
    Object.assign(Derivated.prototype, mixin);

    const d = new Derivated();

    expect(d.sayHi()).toEqual('hi mixin');
  });
});
