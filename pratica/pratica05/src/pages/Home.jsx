import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Painel from "../components/Painel";
import Secao from "../components/Secao";
import "./Home.css";

function Home() {
    return (
        <>
            <Cabecalho>
                <Menu />
                <Secao texto="Página Inicial">
                    <div classname="card-grid" >
                        <Painel texto="Mural de Avisos" itens={["Inscrições para Cursos de Extensão",
                        "Evento Maratona de Programação", "Palestra sobre Inteligência Artificial"]} />
                        <Painel texto="Agenda Acadêmica" itens={["Semana de Provas P1", "Entrega de Trabalhos",
                        "Apresentação de TCC"]} />
                        <Painel texto="Histórico de notas" itens={["Lógica de programação - 5,5",
                        "Banco de Dados - 7,8", "Engenharia de Software - 5,3"]} />
                        <Painel texto="Histórico de Faltas" itens={["Lógica de programação - 4",
                        "Banco de Dados - 0", "Engenharia de Software - 1"]} />
                    </div>
                </Secao>
            </Cabecalho>
            <Conteudo></Conteudo>
        </>
    );
}

export default Home;