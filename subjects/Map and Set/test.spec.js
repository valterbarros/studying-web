import { expect, it, describe } from 'vitest'

describe('Map-set', () => {
  describe('map', () => {
    it('should use whatever data type as key', () => {
      const map = new Map();
      
      const operations = () => {
        map.set({name: 'valter'}, [123]);
        map.set(() => { console.log(123)}, [123]);
      }
      
      expect(operations).not.toThrowError();
    });
    
    it('should be possible turn map into object', () => {
      const map = new Map();

      map.set('name', 'valter');
      map.set('name2', 'valter');
      
      expect(Object.fromEntries(map)).toEqual({name: 'valter', name2: 'valter'});
    });
  });

  describe('set', () => {
    it('should has only unique keys', () => {
      const duplicatedArray = [1,1,1,1,2,2,2,3,4,5,6];

      expect([...new Set(duplicatedArray)]).toEqual([1,2,3,4,5,6]);
    });

    it('should use whatever data type as value', () => {
      const set = new Set();
      
      const operations = () => {
        set.add({name: 'valter'}, [123]);
        set.add(() => { console.log(123)}, [123]);
      }
      
      expect(operations).not.toThrowError();
    });
  });
});
