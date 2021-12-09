'use strict';

const Rectangle = class {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
  square(){
      return this.height*this.width;
  }
};

const equilateral = Category => class extends Category {
  constructor(x, y, side) {
    super(x, y, side, side);
  }
};

const Square = equilateral(Rectangle);

const p1 = new Square(4, 6, 10);
console.log(p1.toString());
console.log(p1.square());