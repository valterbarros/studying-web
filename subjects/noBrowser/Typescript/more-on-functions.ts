// Topic: More on Functions
// Sub topic: Function Type Expressions

function geeter(fn: () => number) {
  fn();
}

// Sub topic: Call signature

type Describe = {
  description: string;
  (someArg: number): boolean;
}

function something(fn: Describe) {
  fn.description = 'default';
  fn.call({});
}

// Sub topic: Construct signatures

type SomeConst = {
  new (s: string): string;
  (s: string): string;
};

function outer(inner: SomeConst) {
  new inner('123'); // Constructor
  inner('123'); // Not constructor
}

// Sub topic: Generic functions

function firstElement<Type>(arr: Array<Type>): Type | undefined {
  return arr[0];
}

const element = firstElement([1,2,3]);

// Sub topic: Inference

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

const mapped = map([1,2,3,4], (item) => item.toString());

// Sub topic: Constraints

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longer = longest([1,2,3], [1,2]);

// Sub topic: Function overload

function makeIt(what: string): void;
function makeIt(what: string, how: string): void;
function makeIt(what: string, how?: string) {
  console.log(what + ' ' + how)
}

function fn(x: boolean): void;
function fn(other: string): void;
function fn(arg: boolean | string) {}

// Sub topic: Declaring this in a Function

type Struct = { length: number };

type DB = {
  filter(filter: (this: Struct) => boolean): Struct[];
}

const db = {} as DB;
db['filter'] = Array.prototype['filter'];
const callback = function run (this: Struct) {
  console.log(this);
}

const ctx: Struct = { length: 5 };

db.filter(callback.bind(ctx));

// Sub topic: Rest Parameters and Arguments

function getFirstReturnRest(first: number, ...rest: number[]) {
  return [first, ...rest];
}

getFirstReturnRest(1,2,3);

const args = [1,2] as const // as const assumes that is imutable;

Math.atan2(...args);

function named<Type>({a,b,c}: {a: Type, b: Type, c: Type}) {}

named({a: '1', b: '1', c: '1'});