const babel = require('@babel/core');

//const fn =function(){return 1;}
const source = 'const fn = () => 1;';
const result = babel.transform(source,{});

console.log(result);

