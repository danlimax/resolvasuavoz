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

const postSolicitacoes = async (res) => {
  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const assunto = document.querySelector("#assunto");
  const mensagem = document.querySelector("#mensagem");
  // const urlImagem = document.querySelector("#urlImagem");
  const data = {
    nome: nome.value,
    email: email.value,
    assunto: assunto.value,
    mensagem: mensagem.value,
    urlImagem: "https://google.com.br",
  };
  try {
    const request = await fetch(
      "http://localhost:3000/resolvasuavoz/solicitacoes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(request.json());
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
    <td><a href="${element.urlImagem}">${element.urlImagem}</a></td>
    `;
    tbodyElement.append(createTr);
  });
};

renderizarSolicitacoes();

const postEvent = async () => {
  await postSolicitacoes();
};

document
  .querySelector("#form-solicitacoes")
  .addEventListener("submit", postEvent);
