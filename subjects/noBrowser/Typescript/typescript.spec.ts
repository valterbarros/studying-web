import { in2, getName } from './template-literal-types';

describe('template-literal-types',() => {
  it('should infer template literal on fn',() => {
    expectTypeOf(getName('ageChanged')).toEqualTypeOf<'ageChanged'>()    
  }); 

  it('should infer template literal on var',() => {
    expectTypeOf(in2).toEqualTypeOf<{ name: 'valterchangechange' }>();
  });
});
