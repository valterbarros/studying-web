import { expect, it, describe } from 'vitest'

describe('Strings', () => {
  it('should be possible to use greather than or less than operator with strings', () => {
    const stringA = 'aa';
    const stringB = 'bb';

    expect(stringB > stringA).toBe(true)
  });

  it.each([String, (inp) => "" + inp, (inp) => `${inp}`])('should be possible to convert to a string', (fn) => {
    expect(fn(true)).toBe('true');
  });
  it('should be possible to not scape without process scape sequences', () => {
    const str1 = String.raw`texto \e`;
    expect(str1).toBe('texto \\e');
  });
  it('should be possible to use sort to sort an array of strings', () => {
    const arr = ['e', 'z', 'f', 'k', 'y', 'a'];
    expect(arr.sort()).toEqual(['a', 'e', 'f', 'k', 'y', 'z']);
  });

  it('should be possible to compare string using localeCompare', () => {
    expect('abcd'.localeCompare('abce')).toBe(-1)
  });

  it('should template literal convert var direct to string', () => {
    const object = {
      [Symbol.toPrimitive](hint) {
        expect(hint).toBe('string');
        return 'string';
      }
    }

    expect(`${object}`).toBe('string');
  });

  it('should be possible to use tagged templates', () => {
    const plural = 's';

    const pluralize = (strings, amount, element) => {
      const first = strings[0];

      if (amount > 1) {
        return `${first}${amount} ${element}${plural}`
      } else {
        return `${first}${amount} ${element}`
      }
    }

    expect(pluralize`You have created ${2} ${'document'}`).toBe('You have created 2 documents')
    expect(pluralize`You have created ${1} ${'document'}`).toBe('You have created 1 document')
  });

  it('should be possible to compose a string', () => {
    // The decomposed canonical form for "ñ" is "\u006E\u0303"
    expect('\u006E\u0303'.normalize('NFC')).toHaveLength(1);
    expect('\u006E\u0303'.normalize('NFKC')).toHaveLength(1);
  });

  it('should be possible to decompose a string', () => {
    // The composed canonical form for "ñ" is "\u00F1"
    expect('\u00F1'.normalize('NFD')).toHaveLength(2);
    expect('\u00F1'.normalize('NFKD')).toHaveLength(2);
  });
});
