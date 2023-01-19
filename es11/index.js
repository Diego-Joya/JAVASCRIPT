const boton = document.getElementById('btn');

boton.addEventListener('click', async function(){
 let res= await import('./file.js') ;
 res.hello();
 alert('ajajaj lo lograste ... ve y salva a raily')


});