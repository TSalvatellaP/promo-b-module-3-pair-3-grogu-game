import "../styles/App.scss"
import Header from "./Header";
import Board from "./Board";

function App() {
  const groguPosition = [];
  const frog = ["🐸", "🐸", "🐸"];
  const cookie = ["🍪", "🍪", "🍪"];
  const egg = ["🥚","🥚","🥚",]; 
  let gameStatus = '';

  // esta función se queda en APP y se lleva al componente dice por props y luego lifting para recoger el estado
  function rollDice() {
    const dice = Math.ceil(Math.random() * 4)
      if(dice === 4 && groguPosition.length > 0){
     
      // se mueve grogu
      gameStatus = "¡Grogu ha avanzado una casilla! 😱"
    } else if (dice === 3 && frog.length > 0){
      frog.splice (0,1);
      // si es 1, 2 o 3, una mercancía se eliminará de su lista
      // asignar cada numero a una mercancia y quitar una si el array es mayor que 0
      gameStatus = "Se ha descargado una ranita"
    } else if (dice === 2 && cookie.length > 0){
      cookie.splice (0,1);
      gameStatus = "Se ha descargado una galleta"
    
    }else if (dice === 1 && egg.length > 0){
    egg.splice (0,1);
    gameStatus = "Se ha descargado un huevo"
    } else {
      gameStatus = "Tira de nuevo el dado"
    }
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
        <div className="goods-item">{cookie[0]}</div>
        <div className="goods-item">{cookie[1]}</div>
        <div className="goods-item">{cookie[2]}</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">{egg[0]}</div>
        <div className="goods-item">{egg[1]}</div>
        <div className="goods-item">{egg[2]}</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">{frog[0]}</div>
        <div className="goods-item">{frog[1]}</div>
        <div className="goods-item">{frog[2]}</div>
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
