import React from "react";
import "./button.css";

const sayHello = () => {
  console.log("Hello!")
}

/* 

>>> Componente de função:

const Button = (props) => {
  return <button className="btn">{props.label}</button>;
}; 

>>> Componente de classe:

*/

class Button extends React.Component {
  render() {
    return <button className="btn" onClick={sayHello}>{this.props.label}</button>;
  }
}

export default Button;

Button.defaultProps = {
  label: "Clique aqui",
};
