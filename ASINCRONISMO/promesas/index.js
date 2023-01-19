
const cows = 10;

const countCown = new Promise(function(resolve, reject){
    if(cows>6){
        resolve(`we have ${cows} on the farm`);
    }else{
        reject(`there is not cown`)
    }
});

countCown.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log('finally'))