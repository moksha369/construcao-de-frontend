import { createContext, useState } from "react";

const TarefaContext = createContext();

function TarefaProvider(props) {
  const [tarefas, setTarefas] = useState(["Estudar react", "Fazer a prática"]);

  const carregar = () => {
    fetch("http://localhost:3000/tarefas")
    .then(response => response.json())
    .then(data => setTarefas(data))
    .catch()(error => console.log("Deu ruim"));
  }
  
  const incluir = (tarefa) => {
    fetch("", {
      method: "POST",
      body: JSON.stringify({nome:tarefa}),
    })
    .then((response) => response.json())
    .then((data) => setTarefas([...tarefas, data]))
    .catch((error) => console.log("Deu ruim"));c
  };

  const remover = (tarefa) => {
    fetch(`http://localhost:3000/tarefas/${tarefa.id}`, {
      method:"delete"
    })
    .then(() => setTarefas(tarefas.filter((item) => item != tarefa)))
    .catch((error) => console.log("Deu rim"));
  };

  const contexto = { tarefas, incluir, remover, carregar };

  return (
    <TarefaContext.Provider value={contexto}>
      {props.children}
    </TarefaContext.Provider>
  );
}

export { TarefaContext, TarefaProvider };
