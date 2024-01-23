import { genBroken, genDigProperty, genNumbersWrapper, generateSequence, generateSomething } from ".";
import { expect, it, describe } from 'vitest'

describe.only(generateSequence.name, () => {
  it('should not loop forever when iterator is infinity', () => {
    const gen = generateSequence();
    
    let count = 0;
    const array = [];

    for (const num of gen) {
      array.push(count++)

      if (count >= 10) gen.return();
    }

    expect(array).toEqual(Array.from({ length: 10 }, (_v, index) => index));
  });

  it('generator composition', () => {
    const gen = genNumbersWrapper(10);

    for (let index = 0; index < 10; index++) {
      expect(gen.next().value).toBe(index);
    }
  });

  it('should accept value on next and pass to yield', () => {
    const gen = generateSomething(20);

    expect.soft(gen.next().value).toBe(1);
    expect.soft(gen.next(10).value).toBe(11);
    expect.soft(gen.next().value).toBe(21);
  });

  it('should throw error when call throw', () => {
    const gen = genBroken();

    expect(() => gen.throw(new Error('gen error'))).toThrow();
  });

  it('should work in recursive mode', () => {
    const obj = {
      account: {
        id: 1
      },
      wrapper: {
        user: {
          name: 'valter',
        },
      },
    };
    const gen = genDigProperty('name', obj);

    expect(gen.next().value).toBe('valter');
  });
});
