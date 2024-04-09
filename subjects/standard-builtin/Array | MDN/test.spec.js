import { it, describe, expect } from "vitest";
import fromAsync from 'array-from-async';

Array.fromAsync = fromAsync;

describe('Array', () => {
  it('should be possible to increase or decrease array', () => {
    const decreaseArray = [1,2,3,4,5,6];
    decreaseArray.length = 2

    expect(decreaseArray).toEqual([1,2]);

    const increaseArray = [1,2,3];
    increaseArray.length = 10;

    expect(increaseArray).toHaveLength(10);
  });

  it('should ignore empty slot using map', () => {
    const arr = [];
    arr.length = 10;

    const newArr = arr.map((item) => item);

    expect(newArr).toHaveLength(10);
  });

  it('should threat empty slot as undefined', () => {
    const arr = [];
    arr.length = 10;

    const newArr = arr.find((item) => item === undefined);

    expect(newArr).toBeUndefined();
  });

  it.each([
    ['concat', [3,4,5]],
    ['map', [(item) => item]],
    ['slice', [0, 1]],
  ])('should not mutate original array using %s', (method, params) => {
    const arr = [1,2,3];

    arr[method](...params)

    expect(arr).toEqual([1,2,3]);
  });

  it.each([
    ['copyWithin', [0,1,2]],
    ['fill', [0,1]],
    ['pop', []],
    ['reverse', []],
    ['shift', []],
    ['sort', []],
  ])('should mutate original array using %s', (method, params) => {
    const arr = [3,1,2];
    const expected = [...arr];

    arr[method](...params)

    expect(arr).not.toEqual(expected);
  });

  it('should be possible to pass this on callback', () => {
    const self = {a:1};
    [1, 2].map(function(_item) {
      expect(this).toEqual(self);
    }, self)
  });

  it('should copy within', () => {
    const arr = [1,2,3];

    expect(arr.copyWithin(1, 2)).toEqual([1,3,3]);
  });

  it('should get last index of', () => {
    const arr = [1,1,1,1];

    expect(arr.lastIndexOf(1)).toEqual(3);
  });

  it('should reduce from right-to-left', () => {
    const arr = [2,1,3,5];

    const final = arr.reduceRight((acc, curr, index) => {
      return [...acc, curr]
    }, []);

    expect(final).toEqual(arr.reverse());
  });

  it('should change all elements within a range', () => {
    const arr = Array(4);

    arr.fill(-1, 0, 4)

    expect(arr).toEqual([-1, -1, -1, -1]);
  });

  it('should be possible to replace some element with toSpliced', () => {
    const arr = [1,2,3,4,5];

    const newArray = arr.toSpliced(1,1,3).toSpliced(2,1,2);
    expect(newArray).toEqual([1,3,2,4,5])

    expect(arr).toEqual([1,2,3,4,5]);
  });

  it('should be possible to create an array based on arguments using Array.of', () => {
    expect(Array.of(1,2)).toEqual([1,2])
  });

  it('should be possible to create new array changing an index using array.with()', () => {
    const arr = [1,2,3];
    expect(arr.with(2, 5)).toEqual([1,2,5]);
    expect(arr).toEqual(arr);
  });

  it('should be possible to create new array from using array.fromAsync()', async () => {
    const asyncIterable = [
      new Promise((resolve) => setTimeout(() => resolve(1), 10)),
      new Promise((resolve) => setTimeout(() => resolve(2), 10)),
      new Promise((resolve) => setTimeout(() => resolve(3), 10)),
      new Promise((resolve) => setTimeout(() => resolve(4), 10)),
    ];

    const mapFn = (item) => item + 1;

    expect(await Array.fromAsync(asyncIterable, mapFn)).toEqual([2,3,4,5]);
  });

  it('should be possible to perform on array like', () => {
    const arrLike = {
      0: 'my',
      1: 'name',
      length: 2,
    }

    expect(Array.prototype.join.call(arrLike, ' ')).toBe('my name');
  });

  it('should be possible to return an iterator from array', () => {
    const arr = [1,2,3];

    console.log(arr.values())

    expect(arr.values()[Symbol.toStringTag]).toBe('Array Iterator')
  });
});
