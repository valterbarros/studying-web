import { expect, beforeEach } from "vitest";
import { buildClass } from "../index";

describe('Class basic syntax', () => {
  beforeEach(() => {
    vi.resetModules();
  })

  it('should this be not fully loaded on Base contructor', () => {
    let getPubliResult;
    let getPrivResult;

    const C = buildClass(class {
      prop = 1;

      constructor() {
        try {
          getPubliResult = this.getPubli()
          this.getPriv()
        } catch (err) {
          getPrivResult = 'error'
        }
      }
    });

    expect(getPubliResult).toBe(undefined);
    expect(getPrivResult).toBe('error');
  });
});
