const url = "http://localhost:3000/tarefas";

// obter tarefas - GET /
axios
  .get(url)
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Deu ruim!", error.message));

// criar tarefa - POST /
axios
  .post(url, { nome: "Dormir", concluida: false })
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Deu ruim!", error.message));

// alterar tarefa - PUT /id
axios
  .put(`${url}/1a2b`, { nome: "Estudar React Native", concluida: true })
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Deu ruim!", error.message));

// alterar tarefa - PATCH /id
axios
  .patch(`${url}/1a2b`, { concluida: false })
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Deu ruim!", error.message));

// excluir tarefa - DELETE /id  
axios
  .delete(`${url}/1a2b`)
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Deu ruim!", error.message));
