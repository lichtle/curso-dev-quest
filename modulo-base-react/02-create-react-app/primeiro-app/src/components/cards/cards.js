import Card from "../card/card.js";

const cardsTitle = ["Título do card 1", "Título do card 2", "Título do card 3"];

const Cards = () => {
  return (
    <div>
      <h2>Meus Cards</h2>
      <div>
        {cardsTitle.map((cardTitle, indice) => {
          // O parâmetro "item" nesse caso é o cardTitle
          return (
            // Nesse caso nem é necessário usar o return
            // Para trabalharmos com listas no React, é necessário atribuir uma chave única (prop key) para cada componente que está sendo criado (nesse caso o componente é o Card - a quantia irá depender de quantos elementos existem no array cardsTitle que estamos percorrendo para criar a lista). Para isso podemos usar o indice, que é o identificador único de posição de um elemento em um array:
            <Card key={indice}>
              <h3>{cardTitle}</h3>
              <p>Esse é o texto do card 1</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
