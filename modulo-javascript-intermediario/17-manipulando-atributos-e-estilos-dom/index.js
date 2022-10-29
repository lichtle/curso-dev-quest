function alterarCorFundoPrimeiroPost() {
  let primeiroPost = document.getElementsByClassName("post")[0];
  primeiroPost.style.backgroundColor = "lightPink";
}

function aumentarFonteSegundoPost() {
  let segundoPost = document.getElementsByClassName("texto-post")[1];

  segundoPost.classList.add("fonte-grande"); // Para acessar a lista de classes de determinado elemento utilizamos o método classList. Para adicionar elementos à essa lista, utilizamos o método add
}

function marcarRadio(genero) {
  let generoMasculino = document.getElementById("genero-masculino");
  let generoFeminino = document.getElementById("genero-feminino");

  if (genero === "M") {
    generoMasculino.checked = true;
  } else if (genero === "F") {
    generoFeminino.checked = true;
  }
}