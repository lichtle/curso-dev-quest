/* PRIMEIRA RESOLUÇÃO

let usuario = prompt("Por favor, informe seu nome:");
alert("Bem-vinde, " + usuario + "!");

*/

let usuario = prompt("Por favor, informe seu nome:");

function alertBoasVindas(usuario = "terráqueo") {
  alert("Bem-vinde, " + usuario + "!");
}

alertBoasVindas();