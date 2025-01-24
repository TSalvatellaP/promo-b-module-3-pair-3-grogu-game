import "../styles/App.scss"
import Header from "./Header";
import Board from "./Board";

function App() {
  const groguPosition = [];
  const frog = [];
  const cookie = [];
  const egg = [];
  const dice = Math.ceil(Math.random() * 4);
  const gameStatus = '';

  return (
    <>
    <div className="page">
      <Header/>
    <main className="page">
      <Board/>

      <section className="sectionDice">
        <button className="dice">Lanzar Dado</button>
        <div className="game-status">{gameStatus}</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>

      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </div>
    </>
  )
}

export default App
