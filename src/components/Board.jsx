import "../styles/Board.scss"
import Grogu from "./Grogu";

function Board() {
// si recibe 4, mover a grogu de sitio

  return (
    <section className="board">
        <div className="cell">
            <Grogu/>
        </div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>
  )
}

export default Board