"use strict";
const tableElement = document.querySelector("#tabela");
const tbodyElement = document.querySelector("tbody");
// Metodo HTTP GET
const getSolicitacoes = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/resolvasuavoz/solicitacoes"
    );
    return await response.json();
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
