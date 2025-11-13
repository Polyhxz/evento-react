import Evento from "../components/Evento";

function Home() {
  return (
    <main>
      <h1>Bem vindo ao Gerenciador de Eventos</h1>
      <p><b>Aqui você fica por detro dos eventos!</b></p>
      <br></br>                                     

      {/*Exibindo os eventos*/}
      <div className="evento-class">
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />
      <Evento nome="Efapi" data="10/10/2025" local="Efapi" />
      <Evento nome="Palestra" data="01/11/2025" local="Unoesc" />
      </div>
    </main>
  );
}
export default Home;

