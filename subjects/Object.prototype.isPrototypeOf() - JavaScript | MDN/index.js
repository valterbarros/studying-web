export function Thing () {}

export function Base () {}
Base.prototype = Object.create(Thing.prototype, {
  constructor: {
    value: Base,
    enumerable: false,
    writable: true,
    configurable: true,
  }
});


export function Child () {}

Child.prototype = Object.create(Base.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  }
});
