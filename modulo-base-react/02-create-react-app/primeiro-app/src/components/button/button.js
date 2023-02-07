import React from "react";
import "./button.css";

// const Button = (props) => {
//   return <button className="btn">{props.label}</button>;
// };

class Button extends React.Component {
  render() {
    return <button className="btn">{this.props.label}</button>;
  }
}

export default Button;

Button.defaultProps = {
  label: "Clique aqui",
};
