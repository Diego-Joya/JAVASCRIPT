let obj={
    name:'Diego',
    age:24,
    country:'colombia',
}

let {name, ...all}=obj;
console.log(name, all);

const prue={
    name:'majo',
    age:20,
}

const prue1={
    ...prue,
    ...obj,
    genio:'ni el hp'
}

console.log(prue1);


let helloworld=()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? resolve('hello world')
        : reject(new Error('puta se jodio esto'))
    })
}

helloworld()
.then(response => console.log(response))
.catch(error=>console.log(error))
.finally (()=>console.log('finalizado'))



const regexData =/([0-9]{4})-([0-9]{2})-([0-9])/
const match = regexData.exec('2022-09-13');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year);

