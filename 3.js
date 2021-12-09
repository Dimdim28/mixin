'use strict'

const obj1={
    name: "Valera",
    city:'Moscow',
};

const mix1={
    toString(){
        return `${this.name} was born in ${this.city}`
    }
};

const mix2={
    toString(){
        return `-${this.name}-was born in-${this.city}-`
    }
}

const res1 = Object.assign(obj1, mix1, mix2);
console.log(obj1);
console.log(res1.toString());


const res2 = Object.assign(obj1, mix2, mix1);
console.log(obj1);
console.log(res2.toString());
