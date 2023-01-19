let arr=[1,2,3,[1,2,3,[1,2,3]]];

console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(3));

let arr1=[1,2,3,4,5];

console.log(arr1.flatMap(uno => [uno, uno * 2]));

let hello= '      helloooo';
console.log(hello.trimStart());

let final= 'holaaa                    ';
console.log(final);
console.log(final.trim());


let arreglo=[['name','Diego'],['age','24']];
console.log(Object.fromEntries(arreglo));


let mysimbol='  mi simbolo';
let simbolo=Symbol(mysimbol);
console.log(simbolo.description);