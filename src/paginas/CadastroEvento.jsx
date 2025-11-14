import React, { UseState, useState } from "react";

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
    }
}
