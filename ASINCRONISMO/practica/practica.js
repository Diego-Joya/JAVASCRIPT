function delay(time,message){
    console.log(time);
    console.log(message);
const rta = new Promise((resolve, reject)=>{
    if(time>0){
        console.log('acaaa');
        setTimeout(()=>{
            resolve(console.log(message))
        },time)
    }else{
        reject('no jodaaa')
    }
})
return rta
}

delay(100,'jajja')
