export class BaseClass {
  property = 'prop'
  static customName = 'base';
  static getName() {
    return this.customName;
  }

  customName = 'base'
  getName() {
    return this.customName
  }
}

export function Base() {}

Base.prototype.value = () => 2;

export function buildClass(BaseClassInherit = class {}) {
  return class extends BaseClassInherit {
    #priv = 12
  
    constructor() {
      super();
    }
    sum() {
      return super.value();
    }
    autoBoundFunction = () => {
      return this.#priv;
    }
  
    getPriv() {
      return this.#priv
    }
  
    getInherited() {
      return this.property
    }
  }
}

export const BaseObj = {
  prop: 1,
  sum() {
    return 1 + 1
  },
  getMethod() {
    return this;
  }
}

export const DerivatedObj = {
  __proto__: BaseObj,
  sum() {
    return super.sum();
  },
  getMethod() {
    return super.getMethod;
  }
}

const baseMixin = {
  name: 'mixin',
}

export const mixin = {
  __proto__: baseMixin,
  sayHi() {
    return `hi ${super.name}`;
  }
}
