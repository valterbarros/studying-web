import { it, describe, expect } from "vitest";

describe('Booleans', () => {
  it('should be possible to increase or decrease array', () => {
    const decreaseArray = [1,2,3,4,5,6];
    decreaseArray.length = 2

    expect(decreaseArray).toEqual([1,2]);

    const increaseArray = [1,2,3];
    increaseArray.length = 10;

    expect(increaseArray).toHaveLength(10);
  });
});
