import "./evento.css";
function Evento(props) {
  return (
    <div className="evento-p">
      <h3>{props.nome}</h3>
      <p><b>Data:</b> {props.data}</p>
      <p><b>Local:</b> {props.local}</p>
    </div>
  );
}

export default Evento;
