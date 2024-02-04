import { expect, it, describe } from 'vitest'

describe('Reference type', () => {
  it('should lost this reference', () => {
    const obj = {
      name: 'John',
      hi() {
        return this.name;
      }
    };

    const { hi } = obj

    expect(() => hi()).toThrowError();
  });
});
