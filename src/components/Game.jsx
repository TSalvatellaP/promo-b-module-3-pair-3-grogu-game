import PropTypes from "prop-types";
import Board from "./Board";
import Form from "./Form";
import ResetButton from "./ResetButton";

function Game(props) {
  return (
    <>
    <Form setNameStatus = {props.setNameStatus}/>
      <Board groguPosition = {props.groguPosition}/>

      <div className={props.hidden ? "hidden" : ""}>
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
          <div className="goods-item">{props.frogs[2]}</div>
        </section>
      </div>

      <ResetButton resetFunctions={props.resetFunctions}/>
      </>
  )
}

Game.propTypes = {
  setNameStatus: PropTypes.func,
  groguPosition: PropTypes.number,
  rollDice: PropTypes.func,
  gameStatus: PropTypes.string,
  cookies: PropTypes.array,
  frogs: PropTypes.array,
  eggs: PropTypes.array,
  hidden: PropTypes.bool,
  resetFunctions: PropTypes.object
};

export default Game