

function Form({setNameStatus}) {
  const handleInput = (ev) => {
    ev.preventDefault ();
    setNameStatus (ev.target.value);

  }


  return (
    <>
    <form action="">
        <label htmlFor="">Nombre de usuaria</label>
        <input type="text" onChange={handleInput}/>
    </form>
    </>
  )
}

export default Form