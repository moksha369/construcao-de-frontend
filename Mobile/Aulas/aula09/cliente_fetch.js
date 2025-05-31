const url = "http://localhost:3000/tarefas";

// obter as tarefas - GET /
await fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// obter uma tarefa - GET /id
await fetch(`${url}/1a2b`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// adicionar uma tarefa = POST /
await fetch(url, {
  method: "POST",
  body: JSON.stringify({ nome: "Praticar React Native", concluida: false }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// alterar uma tarefa = PUT /id
await fetch(`${url}/2db3`, {
  method: "PUT",
  body: JSON.stringify({ nome: "Revisar React", concluida: true }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// alterar uma tarefa = PATCH /id
await fetch(`${url}/2db3`, {
  method: "PATCH",
  body: JSON.stringify({ concluida: false }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// excluir uma tarefa - DELETE /id
await fetch(`${url}/2db3`, { method: "DELETE" })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));