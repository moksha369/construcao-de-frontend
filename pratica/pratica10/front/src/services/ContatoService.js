import axios from "axios";
import.meta.env.VITE_API_URL;

function buscarTodos() {
    return axios.get(url)
    .then((response) => { return { sucesso: true, dados: response.data };})
    .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um erro!"};})
}

function buscarUm() {
    return axios.get(`url/${id}`)
    .then ((response) => { return { sucesso: true, dados: response.data};})
    .catch((error) => {return { sucesso: false, mensagem: "Ocorreu um erro"};});
}

function Adicionar() {
    return axios.post(url, contato)
    .then((response) => {return { sucesso: true, dados: response.data };})
    .catch((error) => {return { sucesso: false, mensagem: "Ocorreu um erro!"};})
}

function Atualizar() {
    return axios.put(`url/${contato.id}`,{nome: contato.nome, telefone: contato.telefone})
    .then((response) => { return { sucesso: true, dados: response.data };})
    .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um erro!"};})
}

function Remover() {
    return axios.delete(`url/${id}`)
    .then((response) => { return { sucesso: true, dados: response.data};})
    .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um erro!"};})
}

export {buscarTodos, buscarUm, Adicionar, Atualizar, Remover};