import Card from "../card/card.js";

const cardsTitle = ["Título do card 1", "Título do card 2", "Título do card 3"];

const sayCardColor = (color) => {
  console.log(color);
};

const Cards = () => {
  return (
    <div>
      <h2>Meus Cards</h2>
      <div>
        {cardsTitle.map((cardTitle, indice) => {
          return (
            <Card key={indice} sayCardColor={sayCardColor}>
              <h3>{cardTitle}</h3>
              <p>Esse é o texto do card 1</p>
            </Card>
          );
        })}

        <Card color="blue" sayCardColor={sayCardColor}>
          <h3>Título</h3>
          <p>Esse é o texto do card 1</p>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
