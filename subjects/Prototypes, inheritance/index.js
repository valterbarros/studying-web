let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

export let admin = {
  __proto__: user,
  isAdmin: true
};

const template = {
  name: 'inherited name',
};

export function InheritFunction() {
  this.anotherProp = true;
};

InheritFunction.prototype = template;

export function Base() {}
Base.prototype.run = function() { console.log('run'); };

export function Derived() {}

Derived.prototype = Object.create(Base.prototype, {constructor: { value: Derived }});
