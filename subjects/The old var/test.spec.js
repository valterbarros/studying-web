import { expect, it, describe } from 'vitest'

describe('The old var', () => {
  describe('let', () => {
    it('should let be block scoped', () => {
      if (true) {
        let nameUser = 'John';
      }
  
      expect(() => nameUser).toThrowError();
    });
  });

  describe('var', () => {
    it('should var dont be block scoped', () => {
      if (true) {
        var nameUser = 'John';
      }
    
      expect(() => nameUser).not.toThrowError();
    });
  
    it('should var be function scoped', () => {
      function test() {
        if (true) {
          var nameUser = 'John';
        }
      }
  
      expect(() => nameUser).toThrowError();
    });

    it('should not throw error on redeclaration', () => {
      expect(() => {
        var nameUser = 'John';
        var nameUser = 'John';
      }).not.toThrowError();
    });
  });
});
