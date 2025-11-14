import React, { UseState } from "react";

function CadastroEvento ({ onCadastro }) {
    //Estados dos campos do formulário 
    const {nome, setNome} = useState ("");
    const {data, setData} = useState ("");
    const {local, setLocal} = useState ("");


function Enviar(a) {
    e.preventDefault();

    //Objeto com dados do evento 
    const novoEvento = {
        id: Date.now(),
        nome, 
        data, 
        local, 
    };
    

    //Limpa os campos após cadastrar 
    setNome("");
    setData("");
    setLocal("");
}

return (
    <div className="cadastroEvento-container">
        <h2> Cadastrar Evento</h2>

        <form onSubmit={enviar} className="form-evento"> 

        <input
        tyoe="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        />

        <label>Data:</label>
        <input
        type="date"
        value={data}
        obnChange={(e) => setData(e.target.value)}
        required
        />

        <label>Local:</label>
        <input
        type="text"
        value={value}
        onChange={(e) => setLocal}
        />

        <button type="submit" className="btn-salvar"> Salvar Evento </button>
        <button type="submit" className="btn-salvar"> Voltar </button>
        </form>
    </div>

    );
}

export default CadastroEvento;