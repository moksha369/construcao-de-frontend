import { createContext, useState } from "react";
import FormTarefa from "../pages/FormTarefa";
import ListTarefa from "../pages/ListTarefa";

function CreateContext() {
    const TarefaContext = CreateContext();

}

function TarefaProvider(props) {
    const [tarefas, setTarefas] = useState([]);
    return <TarefaContext.Provider value={contexto}>
        <h1>Lista de tarefas</h1>
        <FormTarefa />
        <ListTarefa />
        {props.children}</TarefaContext.Provider>

    function incluir(tarefa) {
        setTarefas([...tarefas, tarefa]);
    }

    function remover(tarefa) {
        setTarefas(tarefas.filter(item => item !== tarefa));
    }
}

const contexto = { tarefas, incluir, remover }

export { TarefaContext, TarefaProvider };