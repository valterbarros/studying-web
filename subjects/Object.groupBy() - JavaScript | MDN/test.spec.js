import { expect, it, describe, beforeEach } from 'vitest'

describe.skip('Object.groupBy', () => {
  it('should group by name', () => {
    const inventory = [
      { name: "asparagus", type: "vegetables", quantity: 5 },
      { name: "bananas", type: "fruit", quantity: 0 },
      { name: "goat", type: "meat", quantity: 23 },
      { name: "cherries", type: "fruit", quantity: 5 },
      { name: "fish", type: "meat", quantity: 22 },
    ];

    const result = Object.groupBy(inventory, ({name}) => name).map(({name}) => name[0])

    expect(result).toEqual(['a', 'b', 'g', 'c', 'f']);
  });
});
