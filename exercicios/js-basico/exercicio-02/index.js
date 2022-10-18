const boletoPago = false;

if (boletoPago) {
  alert("O boleto está pago");
} else if (boletoPago === false) {
  alert("O boleto não está pago");
}

/* Outra resolução válida, usando operadore ternário:

const boletoPago = false;

boletoPago
  ? alert("O boleto está pago")
  : alert("O boleto não está pago");

*/
