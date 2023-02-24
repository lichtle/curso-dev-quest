import { useState } from "react";

const Form = (props) => {
  const [inputs, setInputs] = useState({
    image: "",
    value: "",
    suit: "",
  });

  const handleInputChange = (event) => {
    const { target } = event; // Usando a desestruturação de arrays para pegar apenas a propriedade target do array event
    const { name } = target;
    const { value } = target;

    setInputs({
      ...inputs,
      [name]: value,
    }); // Usando o parâmetro REST para obter todos os itens do array "inputs" (não importando a quantidade de itens, porque em algum momento poderia ser mais do que apenas esses três aí) + pegando o name do input que fez a função disparar (através da sua posição no array, por isso ele usou colchetes) + atribuindo o que foi escrito no input como sendo o valor do mesmo, para mais tarde apresentá-lo dentro do parágrafo
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede que o botão de submit exerça seu comportamento padrão, que é atualizar a página
    props.addCard(inputs);
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
        <div>
          <label forHtml="name">Nome da carta</label>
          <input
            type="text"
            id="value"
            name="value"
            onChange={handleInputChange}
            value={inputs.value} // Atualizando o valor do input conforme o que foi digitado - disparo da função handleInputChange
          />
        </div>
        <div>
          <label forHtml="suit">Naipe da carta</label>
          <input
            type="text"
            id="suit"
            name="suit"
            onChange={handleInputChange}
            value={inputs.suit} // Atualizando o valor do input conforme o que foi digitado - disparo da função handleInputChange
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
