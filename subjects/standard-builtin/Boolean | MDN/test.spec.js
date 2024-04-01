import { it, describe, expect } from "vitest";

describe('Booleans', () => {
  it('should not try to convert object to primitive', () => {
    const expectValue = false;
    const obj = {
      [Symbol.toPrimitive](hint) {
        return expectValue;
      },
      valueOf() {
        return expectValue
      },
      toString() {
        return expectValue
      }
    }

    expect(Boolean(obj)).not.toBe(expectValue);
  });
  it.each([undefined, null, 0, -0])('should convert values based if it is falsy', (value) => {
    expect(!!value).toBe(false);
  });
  it.each([-1, 1, {}, [], new Date()])('should convert values based if it is truthy', (value) => {
    expect(!!value).toBe(true);
  });
});
