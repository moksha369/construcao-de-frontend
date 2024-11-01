import { useEffect, useState, useNavigate } from "react";
import { buscarTodos, Remover } from "../services/ContatoService";
import { Listagem } from "../pages/Listagem";

function Listar() {
  const [contatos, setContatos] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const trataAtualizar = (id) => {
    navigate(`/editar/${id}`);
  };
  const trataRemover = async (id) => {
    const resposta = await remover(id);
    if (resposta.sucesso) {
      carregar();
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };
  const carregar = async () => {
    const resposta = await buscarTodos();
    if (resposta.sucesso) {
      setContatos(resposta.dados);
    } else {
      setErro(resposta.mensagem);
    }
  };
useEffect(() => { carregar }, [])
  return ( 
  <>
    <Cabecalho />
    <Conteudo>
        <h2>Listar Contatos</h2>
        <Listagem itens={contatos}
        trataAtualizar={trataAtualizar}
        trataRemover={trataRemover} />
        {erro && <p>{erro}</p>}
    </Conteudo>
  </>
  );
}

export default Listar;
