import "../styles/Board.scss"
import PropTypes from "prop-types";
import Grogu from "./Grogu";

function Board({groguPosition}) {

  const arrayCells = Array(7).fill(null);

  const listCells = arrayCells.map(
    (cell, index) => {
      return <div key={index} className="cell">{index === groguPosition ? <Grogu/> : null}</div>
    }
  )

  return (
    <section className="board">
      {listCells}
      </section>
  )
}

Board.propTypes = {
  groguPosition: PropTypes.number,

}

export default Board