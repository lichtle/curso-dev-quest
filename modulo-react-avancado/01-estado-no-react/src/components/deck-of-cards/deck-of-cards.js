import { useState, useEffect } from "react";
import Form from "../forms/form.js";

async function fetchDeck() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  ); // Fetch de um único deck de cartas (count=1)
  const deck = await response.json(); // Retorna um objeto contendo as cartas do deck, por isso nomeei a variável de "deck"
  return deck.deck_id;
}

async function fetchCards(deckId) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  ); // Fetch do baralho de cartas acima, em que "count" corresponde ao número de cartas que queremos pegar (sendo o máximo 52)
  return await response.json();
}

const CardsList = (props) => {
  return (
    <ul>
      {props.cards.map((card, indice) => {
        return (
          <li key={indice}>
            <img src={card.image} alt={card.value} />
          </li>
        );
      })}
    </ul>
  );
};

const DeckOfCards = () => {
  const [deck, setDeck] = useState({ cards: [] }); // Lembrando que essa sintaxe corresponde à desestruturação de um array. O retorno da função é um par de valores: o estado inicial e uma função que o atualiza

  useEffect(() => {
    // O use effect espera como retorno nada OU uma função de limpeza, e não uma promise. Por isso é necessário criar, no bloco de execução do useEffect, uma função assíncrona para que o await seja utilizado. Neste exemplo quem faz esse papel é a função fetchData, que é chamada em seguida:
    const fetchData = async () => {
      const deckId = await fetchDeck();
      const data = await fetchCards(deckId);

      setDeck({ cards: data.cards });
    };

    fetchData();
  }, []); // Necessário passar um array vazio (dependência) como segundo parâmetro do useEffect para que a página não fique atualizando infinitamente. Funciona como um componentDidMount(), que também só roda uma vez.

  async function addCard(newCard) {
    setDeck({ cards: [...deck.cards, newCard] });
  }

  return (
    <section>
      <Form addCard={addCard} />
      {deck.cards.length > 0 ? (
        <CardsList cards={deck.cards} />
      ) : (
        "Nenhuma carta encontrada"
      )}
    </section>
  );
};

export default DeckOfCards;
