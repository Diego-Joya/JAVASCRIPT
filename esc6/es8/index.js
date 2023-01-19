const data= {
    frontend: 'oscar',
    backend: 'Diego',
    design:'yo'
}

const entries =Object.entries(data);
console.log(entries);
 console.log(entries.length);

 let val= {
    uno:'primero',
    dos: 'segundo'
 }
 let pruebaa = Object.values(val);

 console.log(pruebaa);

 console.log(prueba.length);

 let string = 'hello';

 console.log(string.padStart(7,'hi'));
 console.log(string.padEnd(12,'*****'));





 const prueba = () =>{
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(()=> resolve('holaaa toy aca'), 3000)
        : reject (new Error('pruebas de error'))
    })
 };

const pruebaAsync = async () =>{
    let hello = await prueba();
    console.log(hello);

}

pruebaAsync();

const otraPrueba= async()=>{
    try {
        let hello = await prueba();
        console.log(hello + ' esta es con manejo de errores pero mire q es una promesa');


    } catch (error) {
        console.log(error);
    }
}

otraPrueba();


const conoc=()=>{
    let res = new Promise((correc, incorrect)=>{
        if(false){
            setTimeout(() => {
                correc(' esto es lo tuyo hijo');

            }, 3000);
    }
    else{
        incorrect(new Error(' estoy aprendiento'));
    }})

return res;
}
const ejecutar = async() =>{
    try {
        let dat= await conoc();
        console.log(dat);


    } catch (error) {
       console.log(error); 
    }
}
ejecutar();


 function sumar(){
    let res= new Promise((fiel,infiel)=>{
        if(false){
            fiel('eres un buen hombre')
        }
        else{
            infiel(new error('pailas no funciona'))
        }
    })
    return res;
}

const error = async()=>{
   try {
    let res = await sumar();
    console.log(res);
    
   } catch (error) {
    console.log(error);
   }

}

error();


