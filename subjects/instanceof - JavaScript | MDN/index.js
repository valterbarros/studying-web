export function Base () {}
export function Medium () {}

Medium.prototype = Object.create(Base.prototype, {
  constructor: {
    value: Medium,
    enumerable: false,
    writable: true,
    configurable: true,
  }
});

export function Class1() {}

Class1.prototype = Object.create(Medium.prototype, {
  constructor: {
    value: Class1,
    enumerable: false,
    writable: true,
    configurable: true,
  }
});


export class Base2 {}
export const BoundBase = Base2.bind(null, 1, 2);
console.log(BoundBase.prototype); // true

export class Generalist {
  static isInstanceFlag = Symbol('isIntanceFlag');

  static [Symbol.hasInstance](obj) {
    console.log(this);

    return Generalist.isInstanceFlag in obj;
  }
}
