import {Conditional, Functions, MoreOnFn, Narrowing, Obj} from "./types";

describe('Topic: Narrowing', () => {
  it('should correctly narrow types using if statements to distinguish between arrays and strings', () => {
    function whatIs(ob: Narrowing.Type) {
      if (Array.isArray(ob)) {
        return ob.join(',') // Array
      } else {
        return ob // String
      }
    }

    expectTypeOf(whatIs([123])).toBeString();
  });

  describe('Sub topic: Using type predicates', () => {
    it('should create a type predicate to narrow types between Fish and Bird', () => {
      function getSmallPet(): Narrowing.Fish | Narrowing.Bird {
        return { fly: () => {} } as unknown as Narrowing.Fish;
      }
  
      const pt = getSmallPet();
  
      function isFish(pet: Narrowing.Fish | Narrowing.Bird): pet is Narrowing.Fish {
        return (pet as Narrowing.Fish).swim !== undefined;
      }
  
      if (isFish(pt)) expectTypeOf(pt).toEqualTypeOf<Narrowing.Fish>();
      else expectTypeOf(pt).toEqualTypeOf<Narrowing.Bird>();
    });
  });

  describe('Sub topic: Discriminated unions', () => {
    it('should discriminate unions based on the kind property to determine the shape type', () => {
      let shape = {} as Narrowing.Shape;

      if (shape.kind === 'circle') expectTypeOf(shape.radius).toBeNumber();
      if (shape.kind === 'triangle') expectTypeOf(shape.sideLength).toBeNumber();
      if (shape.kind === 'square') expectTypeOf(shape.sideLength).toBeNumber();
    });
  });

  describe('Sub topic: Exhaustiveness checking', () => {
    // TODO: find a way to test that
    it.skip('should alert when not all possibilities have been tested in a switch statement', () => {
      function getAreaFull(shape: Narrowing.Shape) {
        switch (shape.kind) {
          case "circle":
            return Math.PI * shape.radius ** 2;
          case "square":
            return shape.sideLength ** 2;
          default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
        }
      }

      // @ts-expect-error - error expected WIP
      expectTypeOf(getAreaFull({} as Narrowing.Triangle)).toBeNever();
    });
  });
});

describe('Topic: More on Functions', () => {
  describe('Sub topic: Function Type Expressions', () => {
    it('should declare a function type expression', () => {
      let a: () => void;

      expectTypeOf(a).toEqualTypeOf<() => void>();
    });
  });

  describe('Sub topic: Call signatures', () => {
    it('should add properties to a function type', () => {
      let a: MoreOnFn.Describe;

      expectTypeOf(a.description).toBeString();
      expectTypeOf(a.call).toBeFunction(); 
    });
  });

  describe('Sub topic: Construct signatures', () => {
    it('should declare a constructable type', () => {
      let a = {} as MoreOnFn.SomeConst;

      expectTypeOf(new a('1')).toBeString();
      expectTypeOf(a('1')).toBeString();
    });
  });

  describe('Sub topic: Generic functions', () => {
    it('should create generic functions that return the first element of an array', () => {
      function firstElement<Type>(arr: Array<Type>): Type | undefined {
        return arr[0];
      }
      
      expectTypeOf(firstElement([1,2,3])).toBeNumber();
    });
  });

  describe('Sub topic: Inference', () => {
    it('should infer generic types based on function parameters', () => {
      function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
        return arr.map(func);
      }
      
      map([1,2,3,4], (item) => {
        expectTypeOf(item).toBeNumber();
      });
    });
  });

  describe('Sub topic: Constraints', () => {
    it('should add constraints on generics to ensure they have a length property', () => {
      function longest<Type extends { length: number }>(a: Type, b: Type) {
        if (a.length >= b.length) {
          return a;
        } else {
          return b;
        }
      }
      
      expectTypeOf(longest([1,2,3], [1,2])).toBeArray();
    });
  });

  describe('Sub topic: Function overloads', () => {
    it('should overload functions to handle different parameter types', () => {
      function makeDate(timestamp: number): Date;
      function makeDate(m: number, d: number, y: number): Date;
      function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
        if (d !== undefined && y !== undefined) {
          return new Date(y, mOrTimestamp, d);
        } else {
          return new Date(mOrTimestamp);
        }
      }

      expectTypeOf(makeDate(12323)).toEqualTypeOf<Date>();
      expectTypeOf(makeDate(12, 10, 2021)).toEqualTypeOf<Date>();
    });
  });

  describe('Sub topic: Declaring this in a Function', () => {
    it('should declare this in a function to ensure correct context', () => {
      const db = {} as Functions.DB;

      db['filter'] = Array.prototype['filter'];

      function run (this: Functions.Struct) {
        expectTypeOf(this).toEqualTypeOf<Functions.Struct>();
      }
    });
  });

  describe('Sub topic: Rest Parameters and Arguments', () => {
    it('should get rest parameters in a function', () => {
      function getFirstReturnRest(first: number, ...rest: number[]) {
        return [first, ...rest];
      }
      
      expectTypeOf(getFirstReturnRest(1,2,3)).toBeArray();
    });

    it('should pass rest arguments to a function', () => {
      const args = [1,2] as const;

      expectTypeOf(Math.atan2(...args)).toBeNumber();
    });
  });

  describe('Sub topic: Parameter destructuring', () => {
    it('should destructure parameters in a function', () => {
      function named<Type>({a,b,c}: {a: Type, b: Type, c: Type}) {}

      expectTypeOf(named({a: '1', b: '1', c: '1'})).toBeVoid();
    });
  });
});

describe('Topic: Object types', () => {
  describe('Sub topic: Index Signatures', () => {
    it('should have index signatures to allow dynamic property access', () => {
      let a: Obj.IndexSign;

      expectTypeOf(a['prop']).toBeString();
    });    
  });

  describe('Sub topic: Intersection vs Extension', () => {
    it.skip('should demonstrate that intersection behavior is different from extension', () => {
      type Conflict = { a: string } & {a: number };
      
      const conflict: Conflict = { a: 1 };
      
      expectTypeOf(conflict.a).toEqualTypeOf<never>();
    });
  });

  describe('Sub topic: Extending Types', () => {
    it('should extend a type to add new properties', () => {
      expectTypeOf({} as Obj.AddressWithUnit).toExtend<{ unit: string }>();
    });
  });

  describe('Sub topic: Intersection Types', () => {
    it('should intersect types to combine properties', () => {
      expectTypeOf({} as Obj.ColorfulCircle).toExtend<{radius: number; color: string}>();
    });
  });

  describe('Sub topic: Generic Object Types', () => {
    it('should create generic object types to handle various data structures', () => {
      expectTypeOf({} as Obj.Box<{ name: 'apple' }>).toEqualTypeOf<{contents: {name: 'apple'};}>();
    });
  });

  describe('Sub topic: The ReadonlyArray Type', () => {
    it('should ensure readonly arrays do not have mutating methods like push', () => {
      let nb: readonly number[];
      
      expectTypeOf(nb).not.toHaveProperty('push');
    });
  });
  
  describe('Sub topic: Tuples', () => {
    it('should create tuples to handle fixed-length arrays with specific types', () => {
      expectTypeOf([] as unknown as [number, number]).toEqualTypeOf<[number, number]>();
    });
  });
});

describe('Topic: Generics', () => {
  describe('Sub topic: Parameters in generic constraints', () => {
    it('should create generic object types with constrained parameters', () => {
      function getProperty<Type, Key extends keyof Type>(o: Type, key: Key) {
        return key;
      }

      const obj = { a:1, b: 3, c:4 };

      expectTypeOf(getProperty(obj, 'b')).toEqualTypeOf<'b'>();
    });
  });

  describe('Sub topic: Generic parameters default', () => {
    it('should create generics with default parameters', () => {
      class Rat {
        property: string;
      }

      function createIns<Type = Rat>(c?: { new(): Type }): Type {
        if (!c) return new Rat as Type;
        return new c();
      }
      
      const val = createIns(class {})

      expectTypeOf(val).not.toEqualTypeOf<Rat>();
    });
  });
});

describe('Off topic', () => {
  it('should add types to object methods to ensure type safety', () => {
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

describe('Topic: Indexed access types', () => {
  describe('Sub topic: Number access index', () => {
    it('should use indexed access types to access array elements', () => {
      const obj = {
        clients: [
          { name: 'valter' }
        ]
      };

      type Typ = typeof obj['clients'][number];
      
      expectTypeOf({} as Typ).toEqualTypeOf<{ name: string }>();
    });
  });
});

describe('Topic: Conditional types', () => {
  describe('Sub topic: Add conditional types', () => {
    it('should use conditional types to create type-safe functions', () => {
      function generic<T>(obj: T): MessageOf<T> {
        return obj['message'];
      }

      generic({ message: 'hey jude' });
      
      expectTypeOf({} as Conditional.EmailContent).toEqualTypeOf<string>();
    });
    
    it('should flatten array types using conditional types', () => {
      expectTypeOf({} as Conditional.Flatten<string[]>).toEqualTypeOf<string>();
    });
  });
  
  describe('Sub topic: Inferring within conditional types', () => {
    it('should infer types within conditional types', () => {
      // TODO: 
    });
  });
});

describe('Topic: Mapped Types', () => {
  it('should map a type and turn its properties into boolean values',() => {
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
    it('should remove readonly from properties using mapped types', () => {
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
  
    it('should remove optional from types using mapped types', () => {
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

  describe('Sub topic: Key Remapping via as', () => {
    it('should map and create new types from existing types using key remapping', () => {
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

    it('should use exclude to ignore specific keys in a type', () => {
      type RemoveKey<Type, Key extends keyof Type> = {
        [Property in keyof Type as Exclude<Property, Key>]: Type[Property]
      }
      
      type Removed = RemoveKey<{a?: string, b?: string}, 'a'>;

      expectTypeOf({} as Removed).toEqualTypeOf<{b?: string}>();
    });

    it('should map over unions to create new types', () => {
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

describe('Topic: Template Literal Types', () => {
  it('should add suffix to all union options using template literal types', () => {
    type NorthCity = 'AL' | 'PE';
    type SouthCity = 'SP' | 'RJ';

    type Merge = `${NorthCity | SouthCity}_city`;

    expectTypeOf({} as Merge).toEqualTypeOf<'AL_city' | 'PE_city' | 'SP_city' | 'RJ_city'>();
  });
  
  describe('Sub topic: Inference with Template Literals', () => {
    it('should infer template literal types on variables', () => {
      type Inference<T extends string> = {
        name: `${T}change`
      }
      
      type Inferred = Inference<'valterchange'>;
  
      expectTypeOf({} as Inferred).toEqualTypeOf<{ name: 'valterchangechange' }>();
    });

    it('should infer template literal types in functions', () => {
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
