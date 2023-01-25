const meuPedido = {
  itens: [
    { nome: "Fairy Rose", valor: 290 },
    { nome: "Amaranth", valor: 150 },
    { nome: "Iridium Bar", valor: 1000 },
    { nome: "Entrega", valor: 30, entrega: true },
  ],
};

/* const calcularValorPedido = (pedido) =>
  pedido.itens.reduce(
    (valorTotal, valorAtual) => valorTotal + valorAtual.valor,
    0
  );

console.log(calcularValorPedido(meuPedido)); // Como parâmetro passamos de qual pedido (nesse caso, a variável meuPedido) o valor deverá ser somado

>>> Agora vamos supor que queremos adicionar frete na entrega, mas se o valor passar de 150, o frete é grátis: */

const calcularValorPedido = (pedido) => {
  const valorProdutos = pedido.itens // Armazenando o valor dos produtos na variável valorProdutos
    .filter((item) => !item.entrega) // Filtrando e pegando todos os itens que não sejam "entrega" do parâmetro (objeto) "pedido" (que nesse caso é a variável "meuPedido")
    .reduce((valorTotal, valorAtual) => valorTotal + valorAtual.valor, 0); // Após filtrar, obtemos a soma de todos os itens (tirando a entrega)

  const entrega = pedido.itens.filter((item) => item.entrega); // Armazenando o item "Entrega" na variável "entrega". O filter retorna um array, por isso abaixo é necessário colocar a posição do item entrega, que será 0 pois só existirá um item no array.

  // Agora é necessário criar uma condicional para avaliar a aplicação ou não aplicação do frete:

  if (valorProdutos > 150) {
    return valorProdutos;
  } else {
    return valorProdutos + entrega[0].valor;
  }
};

console.log(calcularValorPedido(meuPedido));
