// Terceira aula do módulo JavaScript Básico, do curso DevQuest.

{
  var nomePessoa = "Leticia"; // Variáveis podem ter seu valor alterado. A variável var possui escopo global. Portanto, mesmo tendo sido declarada dentro de um bloco, a var pode ser exibida através do console.log abaixo, o qual foi convocado fora do bloco onde ela foi criada.

  // As variáveis const e let possuem escopo de bloco. Portanto, seus valores não serão exibidos no console.log abaixo, pois ele foi convocado fora do bloco onde elas foram criadas.

  const emailPessoa = "leticia.negreiros@outlook.com"; // Constantes não podem ter seu valor alterado.

  let telefonePessoa = "55585554467";
}

console.log(nomePessoa);
console.log(emailPessoa);
console.log(telefonePessoa);
