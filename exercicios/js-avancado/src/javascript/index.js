let idDoConselho = document.getElementById("advice-id");
let conselho = document.querySelector(".advice");
let botao = document.querySelector(".btn-dice");

botao.addEventListener("click", async function gerarConselho() {
  try {
    const solicitacao = await fetch("https://api.adviceslip.com/advice"); // Irá retornar uma promise
    const dadosRecebidos = await solicitacao.json();
    const resposta = console.log(dadosRecebidos);

    const id = dadosRecebidos.slip.id;
    idDoConselho.innerText = `ADVICE #${id}`;

    const advice = dadosRecebidos.slip.advice;
    conselho.innerText = advice;
  } catch (err) {
    console.log(`O seguinte erro ocorreu: ${err}`);
  }
});

/* idDoConselho.innerText = slip.id */
