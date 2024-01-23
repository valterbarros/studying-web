export function createRange (from, to) {
  let innerfrom = from;
  let innerTo = to;

  this.setValue = function (from, to) {
    innerfrom = from;
    innerTo = to;
  }

  this[Symbol.iterator] = () => {
    return {
      current: innerfrom,
      last: innerTo,
      next() {
        if (this.current <= this.last) {
          return { value: this.current++, done: false }
        }

        return { done: true }
      }
    }
  }
}

export function createRageAsync (from, to) {
  let innerfrom = from;
  let innerTo = to;

  this[Symbol.asyncIterator] = () => {
    return {
      current: innerfrom,
      last: innerTo,
      async next() {
        if (this.current <= this.last) {
          await new Promise((resolve) => setTimeout(resolve));

          return { value: this.current++, done: false }
        }

        return { done: true }
      }
    }
  };
}

export const cycleColorsAsync = {
  colors: ['yellow', 'red', 'green'],
  async *[Symbol.asyncIterator]() {
    for (let index = 0; index < this.colors.length; index++) {
      yield this.colors[index];
    }
  }
}

export const cycleColors = {
  colors: ['yellow', 'red', 'green'],
  *[Symbol.iterator]() {
    for (let index = 0; index < this.colors.length; index++) {
      const element = this.colors[index];
      if(!element) index = 0;
      yield element;
    }
  }
}

export function createCycleColors (quantity) {
  const colors = ['yellow', 'red', 'green'];

  this[Symbol.iterator] = function* () {
    let innerCount = 0;
    let resetCount = 0;

    while(quantity > ((resetCount * colors.length) + innerCount)) {
      let element = colors[innerCount++];
      if(!element) {
        resetCount++;
        innerCount = 0
        continue;
      }

      yield element;
    }
  }
}
