function newFuntion(name, age, country){
    var name= name || 'MARIA';
    var age = age || '20';
    var country =  'RUSIA';
    console.log(name, age, country);
}

//es6

function newFuntion2(name='Majo', age ='21', country='Rusia'){
    console.log(name, age, country);
}

newFuntion2();
newFuntion2('Diego', '15','Colombia');

let hello='hello';
let word= 'word';
let epicphrase= hello+' '+ word;
console.log(epicphrase);
let epicphrase2 =`${hello} ${word}`;
console.log(epicphrase2);

let persona = {
    'name':'Diego',
    'age': '24',
    'country':'Mx'
}
console.log(persona.name)

let {name,age}=persona;
console.log(name);

let item1=['Diego','Maria'];
let item2 = ['Juan','kalifa'];
let concat=['Paulina', ...item1,...item2];
console.log(concat);


class calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;

    }
    sum(valueA, valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA+ this.valueB;
    }
}

const cal = new calculator();
console.log(cal.sum(2,6))

import {hello} from './modulo';

hello();

function* helloword(){
    if(true){
        yield 'hello, ';
    }
    if(true){
        yield 'world'
    }
}

const generatorHello = helloword();

console.log(generatorHello.next().value);


console.log(generatorHello.next().value);

console.log(generatorHello.next().value);