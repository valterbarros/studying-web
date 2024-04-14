describe('Proxy and Reflect', () => {
  describe('Proxy', () => {
    it.each([[], () => {}, '', ({})])('should be possible to create proxy with many types', (type) => {
      expect(() => new Proxy(type, {}).not.throwError())
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
  
      const proxy = new Proxy(original, {
        getPrototypeOf() {
          return Array.prototype
        }
      })
  
      expect(Object.getPrototypeOf(proxy)).toBe(Array.prototype);
    });
  });

  describe('Reflect', () => {
    it('should be possible to forward operations to target object using Reflect', () => {
      // const proxy = new Proxy({a: 1}, function() {
  
      // })
      const proxy = new Proxy({ a: 1 }, {
        get() {
          return Reflect.get(...arguments)
        }
      })
  
      expect(proxy['a']).toBe(1)
    });
  
    it('should be use Reflect to change receiver', () => {
      const obj1 = {
        _name: 'Base',
        get name() {
          return this._name;
        }
      }
  
      expect(Reflect.get(obj1, 'name', { _name: 'Other' })).toBe('Other')
    });

    it('should be possible to set right context on inherit proxy operation', () => {
      const base = {
        _name: 'Base',
        get customName() {
          return this._name;
        }
      }

      const proxy = new Proxy(base, {
        get(){
          return Reflect.get(...arguments)
        }
      })

      const Derivated = {
        __proto__: proxy,
        _name: 'Derivated',
      }

      expect(Derivated.customName).toBe('Derivated');
    });
  });

  it.todo('should be possible to mix Proxy and Symbol.iterator and inherit and apply');
});