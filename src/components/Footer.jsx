import "./Footer.css";
function Footer() {
    const ano = new Date().getFullYear(); //Retorna o ano atual
  
    return (
      <div className="footer-class">
      <footer>
        <p> Polyana Lemes - Técnico em Desenvolvimento de Sistemas (2025) </p>
      </footer>
      </div>
      
    ); //Fecha retorno
  } //Fecha função
  
  export default Footer;
  