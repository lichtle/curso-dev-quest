let idDoConselho = document.getElementById("advice-id");
let conselho = document.querySelector(".advice");
let botao = document.querySelector(".btn-dice");

async function gerarConselho() {
  const url = "https://api.adviceslip.com/advice";
  const resposta = await fetch(url);
  console.log(resposta.json());

  idDoConselho.innerHTML = resposta.json().slip.id;
}

botao.addEventListener("click", gerarConselho());
