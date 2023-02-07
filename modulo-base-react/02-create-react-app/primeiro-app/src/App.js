import Card from "./components/card/card.js";
import Button from "./components/button/button.js";
import "./App.css";

function App() {
  return (
    <>
      <Card>
        <h3>Título 1</h3>
        <p>Este é o texto do card</p>
      </Card>

      <Card>
        <h3>Título 2</h3>
        <p>Este é o texto do card</p>
        <Button />
      </Card>
    </>
  );
}

export default App;
