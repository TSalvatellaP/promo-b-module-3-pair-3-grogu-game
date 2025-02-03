import { NavLink } from "react-router-dom"

function Footer() {
  return (
<>
<footer className="footer">
  <nav>
    <ul>
      <li className="footer__menu-item">
        <a className="footer__menu-link" href="#/">A jugar</a>
      </li>
      <li className="footer__menu-item">
        <NavLink className="footer__menu-link active"  to ="/instructions">
        ¿Cómo se juega?
        </NavLink>
      </li>
      <li className="footer__menu-item">
        <a className="footer__menu-link" href="#/options">Más opciones</a>
      </li>
    </ul>
  </nav>
  <small className="footer__copy">© Adalab</small>
</footer>
</>
  )
}

export default Footer