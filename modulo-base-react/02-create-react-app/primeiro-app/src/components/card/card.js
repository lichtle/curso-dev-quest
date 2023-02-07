import React from "react";
import "./card.css";

/* >>> Props em componentes de função:

const Card = (props) => { 
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>Este é o texto do card</p>
    </div>
  );
}; 

>>> OU utilizando shorthand notation, para extrair apenas as propriedades desejadas

const Card = ({title}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Este é o texto do card</p>
    </div>
  );
};

>>> Props em componentes de classe:

*/

class Card extends React.Component {
  // Este é um componente de CLASSE (e não de função). A palavra reservada "extends" significa que a classe Card está recebendo características do React. Pra que isso seja possível é necessário importar o React dentro do arquivo
  render() {
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <p>Este é o texto do card</p>
      </div>
    );
  }
}

export default Card;
