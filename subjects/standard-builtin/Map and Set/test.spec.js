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

    it('should not be garbage collected after lost reference key', () => {
      const map = new Map();
      let user = { name: 'user' }

      map.set(user, 1);

      user = null;

      expect(map.size).toBe(1)
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

    it('should not be garbage collected after lost reference value', () => {
      const set = new Set();
      let user = { name: 'user' }

      set.add(user, 1);

      user = null;

      expect(set.size).toBe(1)
    });

    it('should be possible to run union of sets', () => {
      const evens = new Set([2, 4, 6, 8]);
      const squares = new Set([1, 4, 9]);
      const union = evens.union(squares)
      expect([...union]).toEqual([2,4,6,8,1,9])
    });
    it('should be possible to run difference of sets', () => {
      const evens = new Set([2, 4, 6, 8]);
      const squares = new Set([1, 4, 9]);
      const difference = evens.difference(squares)
      expect([...difference]).toEqual([2,6,8])
    });
    it('should be possible to get if is super set of', () => {
      const evens = new Set([2, 4, 6, 8]);
      const squares = new Set([4, 2]);
      const isSuperSet = evens.isSupersetOf(squares)
      expect(isSuperSet).toBe(true)
    });
    it('should be possible to get if is sub set of', () => {
      const evens = new Set([2, 4, 6, 8]);
      const squares = new Set([4, 2]);
      const isSubSet = squares.isSubsetOf(evens)
      expect(isSubSet).toBe(true)
    });
    it('should be possible to run symmetric difference', () => {
      const evens = new Set([2, 4, 6, 8]);
      const squares = new Set([4, 2]);
      const symmetricDifference = squares.symmetricDifference(evens);
      expect([...symmetricDifference]).toEqual([6,8]);
    });
    it('should be possible to run intersection', () => {
      const evens = new Set([2, 4, 6, 8]);
      const squares = new Set([4, 2]);
      const intersection = squares.intersection(evens);
      expect([...intersection]).toEqual([4,2]);
    });
    it('should be possible to get if is disjoint set of other', () => {
      const evens = new Set([1, 3, 6, 8]);
      const squares = new Set([4, 2]);
      const isDisjoint = squares.isDisjointFrom(evens);
      expect(isDisjoint).toBe(true);
    });
  });
});
