import "../styles/App.scss"
import Header from "./Header";
import Board from "./Board";

function App() {
  const groguPosition = [];
  const frog = [];
  const cookie = [];
  const egg = [];
  let gameStatus = '';

  function rollDice() {
    const dice = Math.ceil(Math.random() * 4)
    if(dice === 4){
      // se mueve grogu
      gameStatus = "¡Grogu ha avanzado una casilla! 😱"
    } else {
      // si es 1, 2 o 3, una mercancía se eliminará de su lista
      gameStatus = "Se ha descargado una mercancía"
    }
    console.log(dice, gameStatus);
  }

  rollDice();


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
