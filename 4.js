'use strict'

const translating = text =>{
    text.translate=()=>{
        console.log("translated");
    }
}

const lazy = text => {
    const translate = text.translate;
    text.translate = () => setImmediate(() => translate());
  };
  const text = {};


console.log('Mixin  adds method: translate');
translating(text);
console.log('Before translate');
text.translate();
console.log('After translate\n');

console.log('Mixin lazy() adds lazy behavior');
lazy(text);
console.log('Before translate');
text.translate();
console.log('After translate');