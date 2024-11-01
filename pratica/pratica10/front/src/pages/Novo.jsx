import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Formulario from "./Formulario";
import { Adicionar } from "../services/ContatoService";

function Novo(){
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const trataEnviar = (data) => {
        const resposta = adicionar (data); 
    }
    return (
        <></>
    );
}

export default Novo;