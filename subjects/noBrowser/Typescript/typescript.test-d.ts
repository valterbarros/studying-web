import { in2, getName, type Person } from './template-literal-types';

describe('template-literal-types',() => {
  it('should infer template literal on fn', () => {
    type KeyOfPerson = keyof Person;
    expectTypeOf(getName('ageChanged')).toEqualTypeOf<'ageChanged'>()    
  }); 

  it('should infer template literal on var',() => {
    expectTypeOf(in2).toEqualTypeOf<{ name: 'valterchangechange' }>();
  });
});
