let quadrado = document.getElementsByClassName("quadrado")[0];

quadrado.addEventListener("click", function () {
  if (quadrado.classList.contains("azul")) {
    quadrado.classList.remove("azul");
  } else {
    quadrado.classList.add("azul");
    alert('Este quadrado TEM a classe "azul"!');
  }
});
