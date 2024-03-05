import { expect } from "vitest";

describe('Extending built-in classes', () => {
  it('should be possible to extend built-in array', () => {
    class PowerArray extends Array {
      isEmpty() {
        return this.length === 0;
      }
    }

    const arr = new PowerArray(1,2);
    expect(arr.isEmpty()).toBe(false);
    arr.pop();
    arr.pop();
    expect(arr.isEmpty()).toBe(true);
  });
});
