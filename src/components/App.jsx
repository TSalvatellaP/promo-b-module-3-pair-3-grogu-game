import "../styles/App.scss"
import {useState, useEffect} from 'react';
import Header from "./Header";
import Board from "./Board";
import Form from "./Form";

function App() {
  // 1. cambiar las cinco a variables de estado (nombre, función, useState)
  // 2. la función de roll dice, ajustar con las variables de estado
  // 3. el groguPosition no es un array. El valor inicial es 0
  // el board recibe groguPosition con props

  // const [groguPosition, setGroguPosition] = 0; // 0 a 6
  // const frog = ["🐸", "🐸", "🐸"];
  // const cookie = ["🍪", "🍪", "🍪"];
  // const egg = ["🥚","🥚","🥚",];
  // let gameStatus = '';

  let [groguPosition, setGroguPosition] = useState(0);
  const [frogs, setFrog] = useState(["🐸", "🐸", "🐸"]);
  const [cookies, setCookie] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEgg] = useState(["🥚","🥚","🥚",]);
  let [gameStatus, setGameStatus] = useState("Lanza el dado");
  let [nameStatus, setNameStatus] = useState ("");

  // le decimos que lea el valor de las variables de estado y que cuando tengan cierto valor lance los mensajes de ganar o perder
  // useEffect siempre se usa con variables de estado
  useEffect(() => {
    if(groguPosition >= 6) {
      setGameStatus('¡Has perdido el juego! Grogu ha llegado al final.')
    } else if(frogs.length === 0 && cookies.length === 0 && eggs.length === 0 && groguPosition < 6) {
      setGameStatus('¡Has ganado el juego!')
    }
  }, [groguPosition, frogs, cookies, eggs]); // en este array le decimos las variables de estado que tiene que vigilar. Se ejecuta useEffect cuando cambie su valor


  // esta función se queda en APP y se lleva al componente dice por props y luego lifting para recoger el estado
  function rollDice(event) {
    event.preventDefault();
    const dice = Math.ceil(Math.random() * 4)
    console.log(dice);
      if(dice === 4){
        setGroguPosition (groguPosition + 1);
      // se mueve grogu
      setGameStatus (`${nameStatus} ¡Grogu ha avanzado una casilla! 😱`);
    } else if (dice === 3 && frogs.length > 0){
      setFrog ( frogs.slice (1));
      
      // si es 1, 2 o 3, una mercancía se eliminará de su lista
      // asignar cada numero a una mercancia y quitar una si el array es mayor que 0
      setGameStatus (`${nameStatus} Se ha descargado una ranita`);
    } else if (dice === 2 && cookies.length > 0){
      setCookie(cookies.slice (1));
      setGameStatus (`${nameStatus} Se ha descargado una galleta`);
    
    }else if (dice === 1 && eggs.length > 0){
      setEgg (eggs.slice (1));
      setGameStatus (`${nameStatus} Se ha descargado un huevo`);
    } else {
      setGameStatus (`${nameStatus} Tira de nuevo el dado`);
    }
  }


  return (
    <>
    <div className="page">
      <Header/>
    <main className="page">
      <Form setNameStatus = {setNameStatus}/>
      <Board groguPosition = {groguPosition}/>

      <section className="sectionDice">
        <button className="dice" onClick={rollDice}>Lanzar Dado</button>
        <div className="game-status">{gameStatus}</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">{cookies[0]}</div>
        <div className="goods-item">{cookies[1]}</div>
        <div className="goods-item">{cookies[2]}</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">{eggs[0]}</div>
        <div className="goods-item">{eggs[1]}</div>
        <div className="goods-item">{eggs[2]}</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">{frogs[0]}</div>
        <div className="goods-item">{frogs[1]}</div>
        <div className="goods-item">{frogs[2]}</div>
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
