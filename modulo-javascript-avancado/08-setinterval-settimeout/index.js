/* >>> O SetTimeout determina que a função seja disparada após x milisegundos

setTimeout(function () {
  alert("Seja bem-vinde!");
}, 2000);

>>> O SetInterval executa a função repetidamente de x em x milisegundos

*/

setInterval(() => {
  alert("Seja bem-vinde!");
}, 3000);

/* >>> Para parar a execução do setInterval ou setTimeout utilizamos a função clearInterval ou clearTimeout. Para isso é necessário que a função setInterval ou setTimeout esteja armazenada em uma variável:

const idDoIntervalo = setInterval(() => {
  alert("Seja bem-vinde!");
}, 3000);

console.log(idDoIntervalo) // Output: 1
clearInterval(idDoIntervalo)

*/
