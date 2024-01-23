import { expect, it, describe } from 'vitest'

describe('Call directly the Symbol.iterator', () => {
  it('should iterate between chars', () => {
    expect([...'Name']).toEqual(['N', 'a', 'm', 'e']);
  });

  it('should call iterator directly', () => {
    const str = 'hello';
    const iterator = str[Symbol.iterator]();

    expect(iterator.next().value).toBe('h');
  });
  
  it('should call array iterator directly', () => {
    const list = ['green', 'red'];
    
    const iterator = list[Symbol.iterator]();
    expect(iterator.next().value).toBe('green');
  });
});

describe('Array like objects', () => {
  it('should turn array like to real array', () => {
    const colors = {
      0: 'green',
      1: 'red',
      length: 2,
    };

    expect(Array.from(colors)).toEqual(['green', 'red']);
  });
});
