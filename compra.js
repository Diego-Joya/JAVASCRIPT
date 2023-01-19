var valor_compra=45;
var envio=0

if(valor_compra<=10){
     envio=3;
}
else if(valor_compra<=20){
    envio=5;
}
else if(valor_compra<=50){
    envio=7 
}
else{
    envio=0
}
var resul=console.log('el valor de la compra es de '+(envio+valor_compra));

//switch
envio=0;
var valor_comprapra=35;
switch(valor_compra){
    case(valor_compra<=10):
    envio=3;
    break;
    case(valor_compra<=20):
    envio=5;
    break;
    case(valor_compra<=50):
    envio=7;
    break;
    default:
        envio=0;

}

resul=console.log('el valor del envio es de '+(valor_compra+envio));