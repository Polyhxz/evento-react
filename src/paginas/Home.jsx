import Evento from "../components/Evento";

function Home() {
  return (
    <main>
      <h1>Bem vindo ao Gerenciador de Eventos</h1>
      <p> Aqui você fica por dentro dos eventos.</p>

      {/*Exibindo os eventos*/}
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />
      <Evento nome="Efapi" data="10/10/2025" local="Efapi" />
      <Evento nome="Palesta" data="01/11/2025" local="Unoesc" />
    </main>
  );
}
export default Home;

