function suma(a, b){
    return a+b;
}
function calc(a, b, callback){
    return callback(a,b);
}

console.log(calc(2,2, suma));

setTimeout(function(){
console.log('holaaa ');
},2000)


function saludar(nom){
    console.log(nom);
    console.log('holaaa ' + nom);
}

setTimeout(saludar,200, 'diego')