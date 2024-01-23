import { describe, expect, it } from 'vitest';
import { CustomIterableAndIterator, CustomIterator, iterable } from './index';

describe('iterable', () => {
  it('should return value', () => {
    console.log([...iterable]);
    expect([...iterable]).toEqual([1]);
  });
});

// Dont has what test
describe.skip(CustomIterator.name, () => {});

describe(CustomIterableAndIterator.name, () => {
  it('should has methods', () => {
    const ciai = new CustomIterableAndIterator();

    expect(ciai).toHaveProperty('next');
    expect(ciai).toHaveProperty('throw');
    expect(ciai).toHaveProperty('return');
  });

  it('should return value', () => {
    const ciai = new CustomIterableAndIterator();

    expect([...ciai]).toEqual([0]);
  });
});
