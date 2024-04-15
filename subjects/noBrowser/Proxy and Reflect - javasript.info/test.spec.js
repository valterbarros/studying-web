describe('Proxy and Reflect', () => {
  describe('Proxy', () => {
    it.each([[], () => {}, '', ({})])('should be possible to create proxy with many types', (type) => {
      expect(() => new Proxy(type, {}).not.throwError())
    });

    it('should proxy be a differente from target', () => {
      const object = {};

      expect(new Proxy(object, {}) === object).toBe(false);
    });
  
    it('should be possible to proxy a function', () => {
      let isCalled = false
  
      function original(a) {
        expect(a).not.toBeNull();
        isCalled = true
      }
  
      const proxy = new Proxy(original, {
        construct(...args) {
          console.log(args);
          return {}
        },
        get: console.log,
      })
  
      proxy({ a: 1 });
  
      expect(isCalled).toBe(true);
    });
  
    it('should be possible to proxy an object', async () => {
      let isCalled = false;
  
      const proxy = new Proxy({ key0: 1, key1: 2, key2: 3 }, {
        ownKeys(target) {
          return Object.keys(target).filter((key) => target[key] > 1);
        },
        getOwnPropertyDescriptor() {
          isCalled = true
  
          return {
            enumerable: true,
            configurable: true
          }
        }
      });
      
      expect(Object.keys(proxy)).toEqual(['key1', 'key2']);
      expect(isCalled).toBeTruthy();
    });
  
    it('should getPrototypeOf return same from target', () => {
      const original = function(){}
  
      const proxy = new Proxy(original, {})
  
      expect(Object.getPrototypeOf(proxy)).toBe(Function.prototype);
    });

    it('should be possible to create a revocable proxy', () => {
      const object = { a: 1};

      const { proxy, revoke } = Proxy.revocable(object, {});

      expect(proxy.a).toBe(1);
      
      revoke();

      expect(() => proxy.a).toThrowError();
    });
  });

  describe('Reflect', () => {
    it('should be possible to forward operations to target object using Reflect', () => {
      const proxy = new Proxy({ a: 1 }, {
        get() {
          return Reflect.get(...arguments)
        }
      });

      expect(proxy['a']).toBe(1)
    });

    it('should be use Reflect to change receiver', () => {
      const obj1 = {
        _name: 'Base',
        get name() {
          return this._name;
        }
      }

      expect(Reflect.get(obj1, 'name', { _name: 'Other' })).toBe('Other');
    });

    it('should be possible to set right context on inherit proxy operation', () => {
      const base = {
        _name: 'Base',
        get customName() {
          return this._name;
        }
      }

      const proxyWithReceiver = new Proxy(base, {
        get(){
          return Reflect.get(...arguments)
        }
      });

      const proxyWithoutReceiver = new Proxy(base, {
        get(target, prop){
          return target[prop];
        }
      });

      const Derivated = {
        __proto__: proxyWithReceiver,
        _name: 'Derivated',
      }

      expect(Derivated.customName).toBe('Derivated');

      Object.setPrototypeOf(Derivated, proxyWithoutReceiver);
      expect(Derivated.customName).toBe('Base');
    });
  });

  // https://javascript.info/proxy#tasks
  describe('Exercises', () => {
    it('Error on reading non-existent property', () => {
      let user = {
        name: "John"
      };
      
      function wrap(target) {
        return new Proxy(target, {
          get(target, prop) {
            if (target[prop]) {
              return target[prop]
            } else {
              throw ReferenceError(`Property doesn't exist: ${prop}`)
            }
          }
        });
      }

      user = wrap(user);
      
      expect(user.name).toBe('John'); // John
      expect(() => user.age).toThrowError(`Property doesn\'t exist: age`);
    });

    it('Accessing array[-1]', () => {
      let array = [1, 2, 3];

      array = new Proxy(array, {
        get(target, prop) {
          return Number(prop) < 0 ? target[target.length - Math.abs(Number(prop))] : target[prop];
        }
      });

      expect(array[-1]).toBe(array.at(-1));
      expect(array[-2]).toBe(array.at(-2));
      expect(array[-3]).toBe(array.at(-3));
    });

    it('Observable', () => {
      function makeObservable(targetOrigin) {
        const observers = [];

        function register(fn) {
          observers.push(fn);
        }

        return new Proxy(targetOrigin, {
          get(target, prop) {
            return prop === 'observe' ? register : target[prop]
          },
          set(target, prop, value) {
            observers.forEach((fn) => fn(prop, value));
            target[prop] = value;

            return true;
          }
        });
      }

      let user = {};

      user = makeObservable(user);

      const mockObserve = vi.fn();

      user.observe(mockObserve);

      user.name = "John";

      expect(mockObserve).toBeCalledWith('name', 'John');
    });
  });
});