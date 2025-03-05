// Topic: Mapped Types

type Features = {
  darkMode: () => void;
  other: string;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// Convert all to boolean
export type Opt = OptionsFlags<Features>;

// Sub topic: Mapping Modifiers

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
}

type LockedAccount = {
  readonly id: string;
  readonly name: string;
  documentation?: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property]
}

type MaybeUser = {
  id: string;
  name?: string;
}

type User = Concrete<MaybeUser>;

// Sub topic: Key Remapping via as

type Gettify<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}

interface Person {
  name: string;
  age: number;
}

type Getters = Gettify<Person>;

type RemoveKey<Type, Key extends keyof Type> = {
  [Propery in keyof Type as Exclude<Propery, Key>]: Type[Propery]
}

type Removed = RemoveKey<{a?: string, b?: string}, 'a'>

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E['kind']]: (event: E) => void;
}

type Config = EventConfig<{ kind: 'circle' } | { kind: 'square' }>

const events:Config = {
  circle: (e) => console.log(e.kind),
  square: (e) => console.log(e.kind),
}

// Sub topic: as with conditional 

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
}

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};
 
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;