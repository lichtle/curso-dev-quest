/* PRIMEIRA TENTATIVA

let usuario = prompt("Por favor, informe seu nome:");
alert("Bem-vinde, " + usuario + "!");

*/

const nomeUsuario = prompt("Por favor, informe seu nome:");

function alertBoasVindas(nomeUsuario = "terráqueo") {
  alert("Bem-vinde, " + nomeUsuario + "!");
}

alertBoasVindas();
