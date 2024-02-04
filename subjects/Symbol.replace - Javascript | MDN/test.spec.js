import { expect, it, describe } from 'vitest'

describe('Symbol.keyFor()', () => {
  it('should replace', () => {
    class ReplaceNonCharacters {
      #value;
      #replaceFor;

      constructor(value = /[^a-z]/gi, replaceFor = '') {
        this.#value = value
        this.#replaceFor = replaceFor
      }

      [Symbol.replace](string) {
        return string.replace(this.#value, this.#replaceFor);
      }
    }

    expect('123_privateField12-'.replace(new ReplaceNonCharacters())).toBe('privateField')
  });
});
