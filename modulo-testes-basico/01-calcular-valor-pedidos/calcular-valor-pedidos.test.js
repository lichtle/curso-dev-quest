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
      { nome: "Sanduíche muito caro", valor: 200 },
      { nome: "Entrega", valor: 30, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(meuPedido);

  expect(resultado).toBe(230);
});

// Caso o Estado de entrega seja RS ou SC, deve ser acrescentado um valor de 20% a mais no frete

it("Deve adicionar 20% a mais no valor do frete caso o Estado seja RS", () => {
  const pedidoComEstadoRS = {
    estado: "RS",
    itens: [
      { nome: "Sanduíche caro", valor: 170 },
      { nome: "Entrega", valor: 30, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(pedidoComEstadoRS);

  expect(resultado).toBe(206);
});

it("Deve adicionar 20% a mais no valor do frete caso o Estado seja SC", () => {
  const pedidoComEstadoSC = {
    estado: "SC",
    itens: [
      { nome: "Sanduíche", valor: 70 },
      { nome: "Entrega", valor: 30, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(pedidoComEstadoSC);

  expect(resultado).toBe(106);
});

// Caso o Estado de entrega NÃO seja RS ou SC, não deve ter acréscimo no valor do frete

it("Caso o Estado não seja SC ou RS, não há acréscimo no valor do frete", () => {
  const pedidoComEstadoMG = {
    estado: "MG",
    itens: [
      { nome: "Sanduíche", valor: 70 },
      { nome: "Entrega", valor: 30, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(pedidoComEstadoMG);

  expect(resultado).toBe(100);
});
