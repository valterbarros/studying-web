export const iterable = {
  [Symbol.iterator]() {
    return {
      done: false,
      next() {
        const result = { done: this.done, value: 1 };
        this.done = true
        return result
      }
    }
  }
}

export class CustomIterator {
  next() {}
  return() {}
  throw() {}
}

export class CustomIterableAndIterator {
  #done = false;
  #forever = false;
  #count = 0

  constructor(forever = false) {
    this.#forever = forever;
  }

  next() {
    const result = { done: this.#done, value: this.#count++ };
    this.#done = !this.#forever;

    return result;
  }
  return() {}
  throw() {}
  [Symbol.iterator]() {
    return this;
  }
}
