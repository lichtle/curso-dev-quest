/* Sintaxe: 

for(inicializador; condição; incremento) {
  declaração
}

Inicializador: é uma variável criada no próprio for ou fora dela (utilizando o let) para indicar onde será o início da contagem

Condição: determina até quando o laço se repetirá. Se a condição for verdadeira, executa o bloco de código (declaração) e passa para a próxima repetição. Se a condição for falsa, o ciclo é interrompido e não há mais repetições

Incremento: define quanto deve ser incrementado a cada repetição. Acrescentando-se 1 (i++ ou i = i + 1), por exemplo, a verificação passará por todos os valores a cada repetição até a condição ser atingida e o ciclo ser interrompido. Acrescentando-se 2, a verificação será feita uma vez sim e uma não a cada repetição, até a condição ser atingida

Declaração: bloco de código contendo instruções a serem executadas caso a condição dada for verdadeira

*/

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i <= 3; i++) {
  console.log("Olá, mundo!");
}

for (let i = 0; i <= 10; i = i + 2) {
  console.log(i);
}