const vaiSeHospedar = confirm(
  "Seja bem vinde, aventureiro! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?"
);

vaiSeHospedar
  ? alert("Ótimo! Nós temos as melhores camas de toda a região!")
  : alert("Que pena! Você parecia ser uma pessoa mais legal");

/* Usando if/else:

const vaiSeHospedar = confirm(
  "Seja bem vinde, aventureiro! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?"
);

if(vaiSeHospedar){
  alert("Ótimo! Nós temos as melhores camas de toda a região!")
} else if (vaiSeHospedar === false) {
  alert("Que pena! Você parecia ser uma pessoa mais legal");
}

*/
