let inputText = document.querySelectorAll(".input-text");

inputText.forEach(function (input) { // Como há mais de um item no array inputText, precisamos utilizar um parâmetro
  input.addEventListener("change", function () {
    if (input.value !== "") {
      input.classList.add("com-borda");
    } else {
      input.classList.remove("com-borda");
    }
  });
});
