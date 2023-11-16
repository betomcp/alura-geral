'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('alura_seq_pessoas', [
      {
        nome: "beto testes",
        ativo: true,
        email: "beto@qwww",
        role: "professor",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        nome: "beto aaa",
        ativo: true,
        email: "beto@ff",
        role: "professor",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        nome: "beto bbb",
        ativo: true,
        email: "beto@ggg",
        role: "aluno",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        nome: "beto hhh",
        ativo: true,
        email: "beto@hhh",
        role: "aluno",
        updatedAt: new Date(),
        createdAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('alura_seq_pessoas', null, {});
  }
};
