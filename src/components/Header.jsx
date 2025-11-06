// Cabeçalho

import { Link } from "react-router"; //Importando
function Header() {
  return (
    <header>
      <h2> Gerenciador de Eventos SENAI </h2>
      <nav> 
        <Link to="/"> Início </Link> <Link to="sobre"> Sobre </Link> | {" "}
      </nav>
    </header>
  );
}

export default Header;
