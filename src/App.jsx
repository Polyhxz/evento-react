import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import "./styles.css";


function App() {
  return (
    <Router>
      <div className="app">
        <Header />


        {/* Menu de navegação */}
        <nav>
          <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link>
        </nav>


        {/* Definição das rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
}


export default App;
