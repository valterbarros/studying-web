import { expect, it, describe } from 'vitest'
import { createRange, createRageAsync, cycleColorsAsync, cycleColors, createCycleColors } from '.';

describe(createRange.name, () => {
  it('should range between from to to', () => {
    const range = new createRange(1, 10);
    expect([...range]).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should reset value for each interaction', () => {
    const range = new createRange(1, 10);

    expect([...range]).toEqual([1,2,3,4,5,6,7,8,9,10]);
    expect([...range]).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should work with different types of interactions', () => {
    const range = new createRange(1, 10);
    const set = new Set(range);
    
    expect(set).toHaveLength(10);
    
    for (const num of range) {
      expect(num).toBeTypeOf('number');
    }
  });

  it('should destructuring get only necessary items', () => {
    const range = new createRange(1, Infinity);

    const [first, second] = range;
    
    expect(first).toBe(1)
    expect(second).toBe(2)
  });
  
  it('should accept change range value after initialization', () => {
    const range = new createRange(1, 10);
    
    expect([...range]).toEqual([1,2,3,4,5,6,7,8,9,10]);
    
    range.setValue(1, 50);

    expect([...range]).toHaveLength(50);
  });

  it.skip('should have only Symbol.iterator and setValue as available return', () => {
    const range = new createRange(1, 10);
    expect(Object.keys(range)).toEqual([]);
  });
});


describe(createRageAsync.name, () => {
  it('should range between from to to', async () => {
    const range = new createRageAsync(1, 10);
    let count = 1;
    
    for await (let value of range) {
      expect(value).toEqual(count++);
    }
  }); 
});

describe('cycleColorsAsync', () => {
  it('should cycle async between colors', async () => {
    const innerColors = [];

    for await (let value of cycleColorsAsync) {
      innerColors.push(value)
    }

    expect(cycleColorsAsync.colors).toEqual(innerColors);
  });
});

describe(createCycleColors.name, () => {
  it('should cycle between colors', () => {
    const cycleColors = new createCycleColors(5);

    expect([...cycleColors]).toEqual(['yellow', 'red', 'green', 'yellow', 'red']);
  });
});
