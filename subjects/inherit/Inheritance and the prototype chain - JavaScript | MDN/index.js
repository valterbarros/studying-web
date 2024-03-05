const objBase = {
  a: 1,
  b: 2,
  methodA() {
    return this.a + 1;
  },
};

export const objInherit = {
  a: 10,
  b: 5,
  __proto__: objBase
}

export function createBox (height, width) {
  this.height = height;
  this.width = width;
}

createBox.prototype.getWidth = function () {
  return this.width;
}
