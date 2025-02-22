import { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Painel from "../components/Painel";
import Secao from "../components/Secao";

function Home() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const dadosCarregados = [
        [
          "Inscrições para cursos de extensão",
          "Evento maratona de progamação",
          "Palestra sobre inteligência artificial",
        ],
        [
          "Semana de provas P1",
          "Entrega de trabalhos",
          "Apresentação de TCC",
        ],
        [
            "Lógica de progamação - 5,5",
            "Banco de dados - 7,8",
            "Engenharia de software - 5,3",
          ],
          [
            "Lógica de progamação - 4",
            "Banco de dados - 0",
            "Engenharia de software - 1",
          ],
      ];
      setDados(dadosCarregados);
      setCarregando(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
  <>
    <Cabecalho />
    <Conteudo>
      <Menu />
      <Secao texto="Página Inicial">
        {carregando ? (
          <p>Aguarde...</p>
        ) : (
          <div>
            <Painel texto="Mural de Avisos" itens={dados[0]} />
            <Painel texto="Agenda Acadêmica" itens={dados[1]} />
            <Painel texto="Histórico de notas" itens={dados[2]} />
            <Painel texto="Histórico de faltas" itens={dados[3]} />
          </div>
        )}
      </Secao>
    </Conteudo>
  </>
  );
}

export default Home;
