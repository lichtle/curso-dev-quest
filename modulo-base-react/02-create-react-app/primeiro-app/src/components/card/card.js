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

const Card = ({ children, color, sayCardColor }) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: color }}
      onClick={() => sayCardColor(color)} // É necessário colocar uma função anônima antes da função que queremos para não dispará-la assim que carregar a página
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  color: "purple",
};

export default Card;
