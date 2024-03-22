import { expect, beforeEach } from "vitest";
import { buildClass } from "../index";

describe('Class basic syntax', () => {
  beforeEach(() => {
    vi.resetModules();
  })

  it('should this be not fully loaded on Base contructor', () => {
    let getPubliResult;
    let getPrivResult;

    new (buildClass(class {
      prop = 1;

      constructor() {
        try {
          getPubliResult = this.getPubli()
          this.getPriv()
          console.log('err');
        } catch (err) {
          getPrivResult = 'error'
        }
      }
    }));

    expect(getPubliResult).toBe(undefined);
    expect(getPrivResult).toBe('error');
  });
});
