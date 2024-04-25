describe('Regular expressions', () => {
  it('should be possible to create a regular expression', () => {
    const regular1 = /ab+c/
    const regular2 = new RegExp('ab+c')

    expect(regular1).toBeInstanceOf(RegExp)
    expect(regular2).toBeInstanceOf(RegExp)
  });

  it('should regular expression have properties', () => {
    const re = /ab(c)?/

    re.exec('ab')

    expect(re.lastIndex).toBe(0);
  });
  
  it('should be necessary to scape character classes on new RegExp', () => {
    const re = new RegExp('\\w+\\s', 'g');

    const str = 'text space text space';
  
    expect(re.exec(str)[0]).toEqual('text ');
    expect(re.exec(str)[0]).toEqual('space ');
    expect(re.exec(str)[0]).toEqual('text ');
  });

  it('should be possible to change lastIndex', () => {
    const re = /abc/g

    re.lastIndex = 2;

    let str = 'abc abc abc';
  
    expect(str.replace(re, 'def')).toBe('def def def');
  });

  it('should enable global search', () => {
    const re = /abc/g

    let str = 'abc abc abc';
  
    expect(str.replace(re, 'def')).toBe('def def def');
  });

  it('should return indeces with d', () => {
    const re = /ab(c)?/d

    re.exec('ab')
    
    expect(re.exec('ab').indices).toEqual([[0,2], undefined]);
  });
  
  it('should be possible to match multiline text', () => {
    const re = /ab(c)?$/m

    let str = `
      whatever
      ab
    `;
  
    expect(re.exec(str)[0]).toBe('ab');
  });

  it('should be possible to . follow thrown new lines and other terminator', () => {
    const re = /ab.c/s

    let str = `
ab
c
    `.trim();
  
    expect(re.exec(str)[0]).toBe('ab\nc');
  });

  it('should enable unicode mode on regex', () => {
    const re = /\u{61}/u

    let str = 'a';
  
    expect(re.exec(str)[0]).toBe('a');
  });

  it('should enable unicode (with v) mode on regex', () => {
    const re = /\u{61}/v

    let str = 'a';
  
    expect(re.exec(str)[0]).toBe('a');
  });

  it('should enable case insensitive search', () => {
    const re = /ab(c)?$/i

    let str = 'ABC';
  
    expect(re.exec(str)[0]).toBe('ABC');
  });

  it('should be possible to sticky regex', () => {
    const re = /c?$/y

    re.lastIndex = 9;

    let str = 'testando c';
  
    expect(re.exec(str)[0]).toBe('c');
  });

  it('should be possible to look for work bondarie', () => {
    expect('walking onw moon'.match(/\Bon\b/)[0]).toBe('on');
  });

  it('should be possible to greedy(*?,+?) a quantifier', () => {
    const re = /<[^<].+?>/d

    let str = '<html><head></head><body></body></html>';

    const match = re.exec(str);

    expect(match[0]).toBe('<html>');
  });

  describe('RegExp.prototype.exec', () => {
    it('should exec return null when not found', () => {
      const re = /c/

      let str = 'test';
    
      expect(re.exec(str)).toBeNull();
      expect(re.lastIndex).toBe(0);
    });

    it('should return match and groups', () => {
      const re = /c(b)/d

      let str = 'aaaaaacb';

      const match = re.exec(str);

      expect(match[0]).toBe('cb');
      expect(match[1]).toBe('b');
      expect(match.indices[1]).toEqual([7,8]);
    });

    it('should be possible to use named group', () => {
      const re = /(?<a>a)c(?<b>b)/g

      let str = 'aaaaaacb';

      const match = re.exec(str);

      expect(match.groups).toEqual({a: 'a', b: 'b'});
    });
    
    it('should update lastIndex when using g flag', () => {
      const re = /(?<a>a)c(?<b>b)/g

      let str = 'aaaaaacbaaacb';

      re.exec(str);

      expect(re.lastIndex).toBe(8);
      
      re.exec(str);

      expect(re.lastIndex).toBe(13);
    });
  });

  describe('String.prototype.matchAll', () => {
    it('should throw an error if not using g flag', () => {
      const re = /(?<a>a)c(?<b>b)/

      let str = 'aaaaaacb';

      re.exec(str);

      expect(() => str.matchAll(re)).toThrowError();
    });

    it('should to have a return similar to .exec', () => {
      const re = /(?<a>a)c(?<b>b)/g

      let str = 'aaaaaacb';

      expect(Object.getOwnPropertyNames([...str.matchAll(re)][0])).toEqual(['0','1','2', 'length', 'index', 'input', 'groups']);
    });

    it('should not update last index', () => {
      const re = /(?<a>a)c(?<b>b)/g

      let str = 'aaaaaacb';

      str.matchAll(re);
      str.matchAll(re);

      expect(re.lastIndex).toBe(0);
    });

    it('should return capture group when using g', () => {
      const re = /(?<a>a)c(?<b>b)/g

      let str = 'aaaaaacb';

      const result = [...str.matchAll(re)];

      expect(result[0][0]).toBe('acb');
      expect(result[0][1]).toBe('a');
      expect(result[0][2]).toBe('b');
    });
  });

  describe('String.prototype.match', () => {
    it('should not return capture group when using g', () => {
      const re = /(?<a>a)c(?<b>b)/g

      let str = 'aaaaaacb';

      expect(str.match(re)[0]).toBe('acb');
    });

    it('should not return same from .exec not using g', () => {
      const re = /(?<a>a)c(?<b>b)/

      let str = 'aaaaaacb';

      expect(str.match(re)[0]).toBe('acb');
      expect(str.match(re)[1]).toBe('a');
      expect(str.match(re)).toHaveProperty('index');
      expect(re.lastIndex).toBe(0);
    });
  });

  describe('String.prototype.replace', () => {
    it('should be possible to pass regex and replacement function', () => {
      expect.hasAssertions();

      const re = /(?<a>a)c(?<b>b)/g

      let str = 'aaaaaacb';

      str.replace(re, (...args) => {
        expect(args[0]).toBe('acb');
        expect(args[1]).toBe('a');
        expect(re.lastIndex).toBe(0);
      });
    });

    it('should be possible to replace string by match string', () => {
      const re = /about/g

      let str = 'a big text about life';

      expect(str.replace(re, '$& outside')).toBe('a big text about outside life');
    });

    it('should be possible to replace string by match string', () => {
      const re = /about/g

      let str = 'a big text about life';

      expect(str.replace(re, '$& outside')).toBe('a big text about outside life');
    });

    it('should be possible to replace string by group string', () => {
      const re = /text (about)/g

      let str = 'a big text about life';

      expect(str.replace(re, 'text $1 outside')).toBe('a big text about outside life');
    });

    it('should be possible to replace string by grouped name', () => {
      const re = /text (?<about>about)/g

      let str = 'a big text about life';

      console.log(str.replace(re, '$&'));

      expect(str.replace(re, 'text $<about> outside')).toBe('a big text about outside life');
    });
  });

  describe('String.prototype.replaceAll', () => {
    it('should has regex with g flag', () => {
      const re = /test/;

      const str = 'test';

      expect(() => str.replaceAll(re)).toThrowError();
    });
  });

  describe('RegExp.prototype.test', () => {
    it('should return a boolean', () => {
      const re = /test/;

      const str = 'test';

      expect(re.test(str)).toBe(true);
    });

    it('should be possible to reference named group', () => {
      const re = /Text(?<dash>-|\/)Text\k<dash>Text/g

      let str = 'Text/Text/Text';

      expect(re.test(str)).toBe(true);
    });
  });

  describe('String.prototype.search', () => {
    it('should return the index of the first match', () => {
      const re = /test/g;

      const str = 'previoustestabctest';

      expect(str.search(re)).toBe(8);
    });
  });

  describe('String.prototype.split', () => {
    it('should be possible to use limit param', () => {
      const re = /test/g;

      const str = 'previoustestabctest';

      expect(str.split(re, 1)).toEqual(['previous']);
    });

    it('should be possible to use limit param', () => {
      const re = /test/g;

      const str = 'previoustestabctest';

      expect(str.split(re, 1)).toEqual(['previous']);
    });

    it('should not split UTF-16 code unit when using unicode regex', () => {
      expect("😄😄".split(/(?:)/u)).toEqual(["😄", "😄"]);
    });

    it('should work with groups', () => {
      const re = /\s*(?:;|$)\s*/;

      const str = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

      expect(str.split(re)).toEqual(['Harry Trump', 'Fred Barney', 'Helen Rigby', 'Bill Abel', 'Chris Hand', '']);
    });
  });
});
