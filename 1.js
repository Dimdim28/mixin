'use strict'

const Ob1 = {};
const Ob2 = {};
const Ob3 = {};

const mixinKeys= obj => {
    obj.key1= obj.key1 || 0;
    obj.addKey= function (n) {
      return this.key1 * n;
    };
  };Ob1.key1=6;
  mixinKeys(Ob1);
  Ob1.addKey(4);
  console.dir(Ob1);
  [Ob1, Ob2, Ob3].forEach(mixinKeys);
  console.log(Ob1.addKey(5));