"use strict";

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

const testeSolicitacoes = async () => {
  const users = await getSolicitacoes();
  users.map((element) => {
    console.log(element.nome);
    console.log(element.email);
    console.log(element.assunto);
    console.log(element.mensagem);
    console.log(element.urlImagem);
  });
};
testeSolicitacoes();
