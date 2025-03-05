describe('Off topic', () => {
  it('should be possible to add types to object methods', () => {
    type Base = {
      name: string;
      age: number;
      getProperty<T extends keyof Base>(property: T): Base[T]
      setProperty<T extends keyof Base>(property: T, value: Base[T]): boolean
    };

    const obj: Base = {
      name: '',
      age: -1,
      getProperty(property) {
        return this[property]
      },
      setProperty(property, value) {
        this[property] = value;
        return true;
      },
    };

    expectTypeOf(obj.getProperty('name')).toBeString();
    expectTypeOf(obj.setProperty('name', 'valter')).toBeBoolean();
  });
});

describe('Topic: Mapped Types', () => {
  it('should be possible to map a var and turn into boolean args',() => {
    type Features = {
      darkMode: () => void;
      other: string;
    }
    
    type OptionsFlags<Type> = {
      [Property in keyof Type]: boolean;
    };
    
    type Opt = OptionsFlags<Features>;

    expectTypeOf({} as Opt).toEqualTypeOf<{
      darkMode: boolean,
      other: boolean
    }>();
  });

  describe('Sub topic: Mapping Modifiers', () => {
    it('should be possible to remove readonly from properties', () => {
      type CreateMutable<Type> = {
        -readonly [Property in keyof Type]: Type[Property];
      }
      
      type LockedAccount = {
        readonly id: string;
        readonly name: string;
        documentation?: string;
      };
      
      type UnlockedAccount = CreateMutable<LockedAccount>;
  
      expectTypeOf({} as UnlockedAccount).toEqualTypeOf<{
        id: string;
        name: string;
        documentation?: string
      }>();
    });
  
    it('should be possible to remove optional from types', () => {
      type Concrete<Type> = {
        [Property in keyof Type]-?: Type[Property]
      }
      
      type MaybeUser = {
        id: string;
        name?: string;
      }
      
      type User = Concrete<MaybeUser>;
  
      expectTypeOf({} as User).toEqualTypeOf<{
        id: string;
        name: string;
      }>();
    });
  });

  describe('Sub topic: Key Remapping via as ', () => {
    it('should be possible to map and create new types from other', () => {
      type Gettify<Type> = {
        [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
      }
      
      interface Person {
        name: string;
        age: number;
      }
      
      type Getters = Gettify<Person>;

            
      expectTypeOf({} as Getters).toEqualTypeOf<{
        getName: () => string,
        getAge: () => number
      }>();
    });

    it('should be possible to use exclude to ignore key', () => {
      type RemoveKey<Type, Key extends keyof Type> = {
        [Propery in keyof Type as Exclude<Propery, Key>]: Type[Propery]
      }
      
      type Removed = RemoveKey<{a?: string, b?: string}, 'a'>;

      expectTypeOf({} as Removed).toEqualTypeOf<{b?: string}>();
    });

    it('should be possible to map over unions', () => {
      type EventConfig<Events extends { kind: string }> = {
        [E in Events as E['kind']]: (event: E) => void;
      }
      
      type Config = EventConfig<{ kind: 'circle' } | { kind: 'square' }>

      expectTypeOf({} as Config).toEqualTypeOf<{
        circle: (e: { kind: 'circle' }) => void,
        square: (e: { kind: 'square' }) => void,
      }>();
    });  
  });
});

describe('Topic Template Literal Types', () => {
  it('should be possible to add suffix to all union options', () => {
    type NorthCity = 'AL' | 'PE';
    type SouthCity = 'SP' | 'RJ';

    type Merge = `${NorthCity | SouthCity}_city`;

    expectTypeOf({} as Merge).toEqualTypeOf<'AL_city' | 'PE_city' | 'SP_city' | 'RJ_city'>();
  });
  
  describe('Sub topic: Inference with Template Literals', () => {
    it('should infer template literal on var', () => {
      type Inferece<T extends string> = {
        name: `${T}change`
      }
      
      type Infered = Inferece<'valterchange'>;
  
      expectTypeOf({} as Infered).toEqualTypeOf<{ name: 'valterchangechange' }>();
    });

    it('should infer template literal on fn', () => {
      const obj = {
        name: '',
        age: -1,
      };

      type gettify<T> = {
        [Property in keyof T as `get${string & Property}`]: () => T[Property]; 
      }

      function gettify<T>(obj: T): T & gettify<T> {
        const copy = JSON.parse(JSON.stringify(obj));

        for(let prop in copy) {
          copy[`get${prop}`] = () => copy[prop];
        }

        return copy;
      }

      const getObject = gettify(obj);

      expectTypeOf(getObject.name).toBeString();
      expectTypeOf(getObject.getname()).toBeString();
    });
  });
});
