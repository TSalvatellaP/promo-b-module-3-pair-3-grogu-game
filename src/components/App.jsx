import "../styles/App.scss"
import {useState, useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Instructions from "./Instructions"
import {Route, Routes} from "react-router-dom";
import Game from "./Game";

function App() {

  let [groguPosition, setGroguPosition] = useState(0);
  const [frogs, setFrog] = useState(["🐸", "🐸", "🐸"]);
  const [cookies, setCookie] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEgg] = useState(["🥚","🥚","🥚",]);
  let [gameStatus, setGameStatus] = useState("Lanza el dado");
  let [nameStatus, setNameStatus] = useState ("");
  const [hidden, setHidden] = useState(false);

  const resetFunctions = {
    setGroguPosition,
    setFrog,
    setCookie,
    setEgg,
    setGameStatus,
    setNameStatus,
    setHidden
  }



  // le decimos que lea el valor de las variables de estado y que cuando tengan cierto valor lance los mensajes de ganar o perder
  // useEffect siempre se usa con variables de estado
  useEffect(() => {
    if(groguPosition >= 6) {
      setGameStatus('¡Has perdido el juego! Grogu ha llegado al final.')
      setHidden(true);
    } else if(frogs.length === 0 && cookies.length === 0 && eggs.length === 0 && groguPosition < 6) {
      setGameStatus('¡Has ganado el juego!')
      setHidden(true);
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
      <Routes>
        <Route path="/instructions" element = {<Instructions/>} />
        <Route path="/game" element = {<Game setNameStatus = {setNameStatus} groguPosition = {groguPosition} rollDice = {rollDice} gameStatus = {gameStatus} cookies ={cookies} eggs = {eggs} frogs ={frogs} hidden={hidden} resetFunctions={resetFunctions}/>}/>
      </Routes>
    </main>
    <Footer/>
    </div>
    </>
  )
}

export default App
