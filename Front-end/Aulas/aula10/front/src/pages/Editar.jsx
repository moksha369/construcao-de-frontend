import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cabecalho from "../components/Cabecalho";
import Formulario from "../pages/Formulario";
import Conteudo from "../components/Conteudo";
import { atualizar, buscar } from "../services/ContatoService";

function Editar() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [contato, setContato] = useState({});
    const [erro, setErro] = useState("");

    const onSalvar = async (data) => {
      const resultado = await atualizar({id, ...data});
      if (resultado.sucesso) {
        setErro("");
        navigate("/");
      } else { 
        setErro(resultado.mensagem);
      }
    }
 
    const carregar = async() => {
      const resultado = await buscar(id);
      if (resultado.sucesso) {
        setContato(resultado.dados);
        setErro("");
      } else {
        setContato ({})
        setErro(resultado.mensagem);
      }
    };

    useEffect(() => {
      carregar();
    }, []);

    return (
    <>
      <Cabecalho />
      <Conteudo>
        {erro && <p>{erro}</p>}
        <h2>Editar Contato</h2>
        <Formulario dados={contato} trataEnviar={onSalvar}/>
      </Conteudo>
    </>
    );
  }
  
  export default Editar;
  