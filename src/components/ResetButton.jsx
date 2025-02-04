import PropTypes from "prop-types";

function ResetButton(props) {

    function handleClick() {
        // quitar clase hidden
        // resetear arrays grogu y mercancía
        props.resetFunctions.setGroguPosition(0),
        props.resetFunctions.setFrog(["🐸", "🐸", "🐸"]),
        props.resetFunctions.setCookie(["🍪", "🍪", "🍪"]),
        props.resetFunctions.setEgg(["🥚","🥚","🥚"]),
        props.resetFunctions.setGameStatus("Lanza el dado"),
        props.resetFunctions.setNameStatus(""),
        props.resetFunctions.setHidden(false)
    }

  return (
    <section>
        <button className="restart-button" onClick={handleClick}>Reiniciar Juego</button>
    </section>
  )
}

ResetButton.propTypes = {
    resetFunctions: PropTypes.object,
    setGroguPosition: PropTypes.func,
    setFrog: PropTypes.func,
    setCookie: PropTypes.func,
    setEgg: PropTypes.func,
    setGameStatus: PropTypes.func,
    setNameStatus: PropTypes.func,
    setHidden: PropTypes.func
}

export default ResetButton