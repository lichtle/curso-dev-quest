const calcularValorPedido = require("./calcular-valor-pedidos");

it("Não cobrar frete quando o valor dos produtos for maior que 200", () => {
  // AAA - 3 passos para criar um teste

  // ARRANGE - O que precisa ser passado pra função
  const meuPedido = {
    itens: [
      { nome: "Fairy Rose", valor: 290 },
      { nome: "Amaranth", valor: 150 },
      { nome: "Iridium Bar", valor: 1000 },
      { nome: "Entrega", valor: 30, entrega: true }, // Criar um pedido teste
    ],
  };

  // ACT - Passar para a função o que foi criado (teste do arrange)
  const resultado = calcularValorPedido(meuPedido); // Criar uma variável para armazenar o resultado do cálculo feito pela função

  // ASSERT - Resultado epserado
  expect(resultado).toBe(1440); // Criar o teste
});

it("Deve cobrar frete quando o valor dos produtos for menor que 200", () => {
  const meuPedido = {
    itens: [
      { nome: "Amaranth", valor: 150 },
      { nome: "Entrega", valor: 30, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(meuPedido);

  expect(resultado).toBe(180);
});

it("Deve cobrar frete quando o valor dos produtos for igual a 200", () => {
  const meuPedido = {
    itens: [
      { nome: "Sanduíche", valor: 200 },
      { nome: "Entrega", valor: 30, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(meuPedido);

  expect(resultado).toBe(230);
});
