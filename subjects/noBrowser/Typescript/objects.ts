// Topic: Objects
// Sub topic: intersection vs extension

interface A {
  a: number;
}

interface A {
  // throw error
  a: string;
}

type Conflict = { a: string } & {a: number };

const conflict: Conflict = { a: 1};

// a is never
conflict.a

// Sub topic: Generic Object Types

interface Box<T> {
  contents: T;
} 

declare const box: Box<{name: 'apple'}>;

// Sub topic: readonly array

const arr: readonly string[] = ['a'];
// Throw error
arr.push('1')

// Sub topic:  tuples

declare const tuple: [number, string];
