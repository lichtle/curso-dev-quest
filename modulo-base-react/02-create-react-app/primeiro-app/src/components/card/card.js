import React from "react";
import './card.css'

class Card extends React.Component { // Este é um componente de CLASSE (e não de função). A palavra reservada "extends" significa que a classe Card está recebendo características do React. Pra que isso seja possível é necessário importar o React dentro do arquivo
  render(){
    return (
      <div className="card">
        <h3>Título</h3>
        <p>Este é o texto do card</p>
      </div>
    )
  }
}

export default Card