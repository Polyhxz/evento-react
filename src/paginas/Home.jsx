import "./home.css";
import Evento from "../components/Evento";

function Home() {
  return (
    <main>
      <h1>Bem vindo ao Gerenciador de Eventos</h1>
      <h3>Aqui você fica por dentro dos eventos ≽^- ˕ -^≼!</h3>
      <br></br>                                     

      {/*Exibindo os eventos*/}
      <div className="evento-class">
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />
      <br></br>
      <Evento nome="Efapi" data="10/10/2025" local="Efapi" />
      <br></br>
      <Evento nome="Palestra" data="01/11/2025" local="Unoesc" />
      </div>
      <br></br>
      <Evento nome="Semana da Indústria" data="22/11/2025" local="Laboratório 2"/>
    </main>
  );
}
export default Home;

