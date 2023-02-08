import Card from "../card/card.js";

const Cards = () => {
  return (
    <div>
      <h2>Meus Cards</h2>
      <div>
        <Card>
          <h3 title="Título">Título do card 1</h3>
          <p>Este é o texto do card 1</p>
        </Card>

        <Card>
          <h3>Título do card 2</h3>
          <p>Este é o texto do card 2</p>
        </Card>

        <Card>
          <h3>Título do card 3</h3>
          <p>Este é o texto do card 3</p>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
