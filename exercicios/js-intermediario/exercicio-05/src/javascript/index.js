const setaEsquerda = document.querySelectorAll(".seta-esquerda");
const setaDireita = document.querySelectorAll(".seta-direita");

const primeiraImagem = document.getElementsByClassName("container-imagem-1");
const segundaImagem = document.getElementsByClassName("container-imagem-2");
const terceiraImagem = document.getElementsByClassName("container-imagem-3");
const quartaImagem = document.getElementsByClassName("container-imagem-4");

let imagens = [primeiraImagem, segundaImagem, terceiraImagem, quartaImagem];

console.log(setaDireita[1]);

setaDireita.forEach(function (setaAtual) {
  setaAtual.addEventListener("click", function (imagemAtual) {
    imagens[imagemAtual].classList.remove("opacidade-imagem");
    imagens[imagemAtual++].classList.add("opacidade-imagem");
  });
});
