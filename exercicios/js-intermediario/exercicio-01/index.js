let primeiroQuadrado = document.getElementById("quadradoQueMudaDeCor");

/* MINHA PRIMEIRA RESOLUÇÃO (adicionando a propriedade onclick no elemento button): 

function mudarCorPrimeiroQuadrado() {
  primeiroQuadrado.style.backgroundColor = "yellow";
}

*/

// MINHA SEGUNDA RESOLUÇÃO (com addEventListener):

let botao = document.getElementById("btn-muda-cor");

botao.addEventListener("click", function () {
  primeiroQuadrado.style.backgroundColor = "yellow";
});

/* SOLUÇÃO PROPOSTA: 

>>> Para esta solução, as divs criadas no HTML teriam que ter as classes "quadrado" com CSS de width e length iguais a 100px e também as classes "azul" e "vermelho", uma para cada quadrado, com CSS de bgc azul e vermelho, respectivamente. Além disso, seria necessário haver uma CSS rule .amarelo {bgc = "yellow"} para que o quadradoAzul.classList.add("amarelo") funcionasse

botao.addEventListener("click", function () {
  quadradoAzul.classList.remove("azul");
  quadradoAzul.classList.add("amarelo");
});

*/
