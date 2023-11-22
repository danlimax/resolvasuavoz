"use strict";
const tableElement = document.querySelector("#tabela");
const tbodyElement = document.querySelector("tbody");
const form = new FormData(document.querySelector("#form-solicitacoes"));
const url = "https://localhost:3000/resolvasuavoz/solicitacoes ";
// Metodo HTTP GET
const getSolicitacoes = async () => {
  try {
    const response = await fetch(`${url}`);
    return await response.json();
  } catch (error) {
    return [];
  }
};
const postSolicitacoes = async (res) => {
  try {
    await fetch(`${url}`, {
      method: "POST",
      body: form,
    });
    console.log(res.data);
  } catch (error) {
    return [];
  }
};

const renderizarSolicitacoes = async () => {
  const users = await getSolicitacoes();
  users.map((element) => {
    const createTr = document.createElement("tr");
    createTr.innerHTML = `
    <td>${element.nome}</td>
    <td>${element.email}</td>
    <td>${element.assunto}</td>
    <td>${element.mensagem}</td>
    <td>${element.urlImagem}</td>
    `;
    tbodyElement.append(createTr);
  });
};
renderizarSolicitacoes();
