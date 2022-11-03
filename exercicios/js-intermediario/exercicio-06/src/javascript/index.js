let perguntas = document.querySelectorAll(".item");

perguntas.forEach(function (item) {
  item.addEventListener("click", function () {
    // >>> Primeiro precisamos fazer a verificação do que quer que seja e depois adicionar a ação desejada (que nesse caso é adicionar a classe ativo ao item clicado item.classList.add("ativo") )

    const itemAtivoAtual = document.querySelector(".ativo");

    if (itemAtivoAtual) {
      // Verifica se existe um elemento de classe "ativo", senão dá erro
      itemAtivoAtual.classList.remove("ativo"); // Se existir, remove a classe "ativo" para que a pergunta feche ao abrir uma nova, determinada pela ordem abaixo (item.classList.add("ativo") )
    }

    item.classList.add("ativo");
  });
});
