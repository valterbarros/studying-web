describe('Promises, async/await', () => {
  it('should be possible to create a promise', () => {
    const p = new Promise((resolve) => resolve('a'));

    expect(p).resolves.toBe('a')
  });

  it('should call executor function immediatly', () => {
    // executor without resolve promise is never fulfilled
    const executor = vi.fn();
    new Promise(executor);

    expect(executor).toBeCalled();
  });

  it('should be possible to add a consumer', () => {
    const p = new Promise((resolve) => resolve('a'));

    p.then((str) => {
      expect(str).toBe('a')
    });
  });

  it('should be possible to catch an error', () => {
    const error = new Error('a');

    const p = new Promise((resolve, reject) => reject(error));

    expect(p).rejects.toBe(error)
  });

  it('should be possible to return a promise on consumer', async () => {
    expect.hasAssertions();

    const p = new Promise((resolve) => resolve('a'));

    await p.then(() => {
      return new Promise((resolve) => resolve('123'))
    }).then((result) => {
      expect(result).toBe('123')
    })
  });

  it('should be possible to return a thenable object', () => {
    expect.hasAssertions();

    class Thenable {
      constructor(num) {
        this.num = num
      }

      then(resolve, reject) {
        resolve(this.num);
      }
    }

    const p = new Promise((resolve, reject) => {
      resolve(123)
    }).then((result) => {
      return new Thenable(result);
    })

    expect(p).resolves.toBe(123)
  });

  it('should be possible to await a thenable', async () => {
    expect.hasAssertions();

    class WaitPromise {
      constructor(time) {
        this.time = time
      }

      then(resolve, reject) {
        setTimeout(() => {
          resolve(this.num);
        }, this.time);
      }
    }

    expect(await new WaitPromise(100)).toBeUndefined();
  });

  it('should auto handle errors', () => {
    const p = new Promise(() => {
      throw new Error('error');
    });

    expect(p).rejects.toThrowError();
  });

  it('should move control to next catch when a error occur', () => {
    expect.hasAssertions();
    const p = new Promise(() => {
      resolve()
    }).then(() => {
      throw new Error()
    }).catch(() => {
      throw new Error()
    }).catch(() => {
      // do nothing
    }).then(() => {
      return '123';
    })

    expect(p).resolves.toBe('123');
  });

  it.todo('should call unhandledrejection event');

  it('should return from Promise.all be same order from passed iterable', () => {
    const promises = Promise.all([
      new Promise((resolve) => setTimeout(() => resolve(0), 100)),
      new Promise((resolve) => setTimeout(() => resolve(2), 50)),
      new Promise((resolve) => setTimeout(() => resolve(5), 20)),
    ]);

    expect(promises).resolves.toEqual([0,2,5])
  });

  it('should return from Promise.allSettled ignore errors and continue execution', () => {
    const error = new Error('error');

    const promises = Promise.allSettled([
      new Promise((resolve) => setTimeout(() => resolve(0), 100)),
      new Promise((_resolve, reject) => setTimeout(() => reject(error), 50)),
      new Promise((resolve) => setTimeout(() => resolve(5), 20)),
    ]);

    expect(promises).resolves.toEqual([
      {
        "status": "fulfilled",
        "value": 0,
      },
      {
        "reason": error,
        "status": "rejected",
      },
      {
        "status": "fulfilled",
        "value": 5,
      },
    ]);
  });

  it('should return from Promise.race return first promise settled', () => {
    const error = new Error('error');

    const promises = Promise.race([
      new Promise((resolve) => setTimeout(() => resolve(0), 100)),
      new Promise((_resolve, reject) => setTimeout(() => reject(error), 50)),
      new Promise((resolve) => setTimeout(() => resolve(5), 20)),
    ]);

    expect(promises).resolves.toBe(5);
  });

  it('should return from Promise.race return first promise fulfilled', () => {
    const error = new Error('error');

    const promises = Promise.any([
      new Promise((resolve) => setTimeout(() => resolve(0), 100)),
      new Promise((resolve, reject) => setTimeout(() => reject(5), 60)),
      new Promise((_resolve, reject) => setTimeout(() => reject(error), 50)),
    ]);

    expect(promises).resolves.toBe(0);
  });

  it('should be possible to create a resolved function with a arbitrary value', () => {
    expect(Promise.resolve(1)).resolves.toBe(1);
  });

  it('should be possible to create a rejected function with a arbitrary value', () => {
    expect(Promise.reject(1)).rejects.toThrowError();
  });

  it('should not run promise code immediatly because microtasks queue', async () => {
    const order = [];

    Promise.resolve(1).then((value) => order.push(value))
    new Promise((resolve) => resolve(3)).then((value) => order.push(value))
    
    order.push(2);

    await vi.waitFor(() => expect(order).toEqual([2,1,3]));
  });
});
