import { Component } from "react";

async function fetchDeck() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  ); // Fetch de um único deck de cartas (count=1)
  const deck = await response.json(); // Retorna um objeto contendo as cartas do deck, por isso nomeei a variável de "deck"
  return deck.deck_id;
}

async function fetchCards(deckId) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
  ); // Fetch do baralho de cartas acima, em que "count" corresponde ao número de cartas que queremos pegar (sendo o máximo 52)
  return await response.json();
}

class DeckOfCards extends Component {
  constructor() {
    super();
    this.state = { cards: [] }; // Criando um array de cartas vazio para ser posteriormente populado pelas funções de fetch
  }

  async componentDidMount() {
    // Chamando asa funções criadas acima. Como são funções assíncronas, é necessário utilizar o await para obter as respostas
    const deck = await fetchDeck();
    const cards = await fetchCards(deck);

    this.setState({
      cards: cards.cards, // Populando a chave cards criada anteriormente com o conteúdo da variável cards acima (que é um objeto cuja chave também nomeada cards corresponde às 52 cartas do deck)
    });
  }

  render() {
    return (
      <section>
        <ul>
          {this.state.cards.map((card, indice) => {
            return (
              <li key={indice}>
                <img src={card.image} alt={card.value} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default DeckOfCards;
