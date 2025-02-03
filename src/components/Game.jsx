
import Board from "./Board";
import Form from "./Form";

function Game(props) {
  return (
    <>
    <Form setNameStatus = {props.setNameStatus}/>
      <Board groguPosition = {props.groguPosition}/>

      <section className="sectionDice">
        <button className="dice" onClick={props.rollDice}>Lanzar Dado</button>
        <div className="game-status">{props.gameStatus}</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">{props.cookies[0]}</div>
        <div className="goods-item">{props.cookies[1]}</div>
        <div className="goods-item">{props.cookies[2]}</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">{props.eggs[0]}</div>
        <div className="goods-item">{props.eggs[1]}</div>
        <div className="goods-item">{props.eggs[2]}</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">{props.frogs[0]}</div>
        <div className="goods-item">{props.frogs[1]}</div>
        <div className="goods-item">{props.rogs[2]}</div>
      </section>

      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
      </>
  )
}

export default Game