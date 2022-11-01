const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
  if (imagemAtual === imagens.length - 1) {
    return;
  } // Verifica se a imagem atual não é a última, porque se for esse eventListener não deve ocorrer. return é o comando para parar a execução da função caso a condição seja verdadeira. Essa condição deve ser verificada antes que o restante do código seja executado, por isso ela deve vir no topo da função

  esconderImagemAberta(); // Esconde a imagem atual

  imagemAtual++; // Vai para a próxima imagem

  imagens[imagemAtual].classList.add("mostrar"); // Mostra a imagem atual

  mostrarOuEsconderSetas(); // Mostra ou esconde as setas dependendo do índice da imagem atual
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === imagens[0]) {
    return;
  } // Verifica se a imagem atual não é a primeira, porque se for esse eventListener não deve ocorrer

  esconderImagemAberta();

  imagemAtual--;

  imagens[imagemAtual].classList.add("mostrar");

  mostrarOuEsconderSetas();
});

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar");
  imagemAberta.classList.remove("mostrar");
} // Buscando o elemento de classe "mostrar" e removendo-a para esconder a imagem atual

function mostrarOuEsconderSetas() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;

  if (naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("opacidade");
  } else {
    setaVoltar.classList.add("opacidade");
  } // Diz respeito à primeira imagem

  const chegouNaUltimaImagem =
    imagemAtual !== 0 && imagemAtual === imagens.length - 1;
  if (chegouNaUltimaImagem) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  } // Diz respeito à última imagem
}
