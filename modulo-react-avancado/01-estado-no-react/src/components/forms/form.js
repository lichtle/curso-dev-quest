import { useState } from "react";

const Form = (props) => {
  const [inputs, setInputs] = useState({ image: "" });

  const handleInputChange = (event) => {
    setInputs({ image: event.target.value }); // Pegando o valor digitado no input através do método target.value
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede que o botão de submit exerça seu comportamento padrão, que é atualizar a página
    props.addCard(inputs)
  };

  return (
    // O forHtml nesse caso é equivalente ao for do HTML, que linka a label ao input
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label forHtml="image">Endereço da imagem da carta</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={handleInputChange}
            value={inputs.image} // Atualizando o valor do input conforme o que foi digitado - disparo da função handleInputChange
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
