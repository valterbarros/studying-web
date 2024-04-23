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
});
