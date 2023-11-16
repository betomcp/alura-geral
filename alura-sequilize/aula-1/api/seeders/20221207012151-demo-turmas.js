'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('alura_seq_turmas', [{
        data_inicio: '2022-01-01',
        nivel_id: 1,
        docente_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2022-01-01',
        nivel_id: 2,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2022-01-01',
        nivel_id: 3,
        docente_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2022-01-01',
        nivel_id: 1,
        docente_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2022-01-01',
        nivel_id: 2,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2022-01-01',
        nivel_id: 1,
        docente_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2022-01-01',
        nivel_id: 3,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2022-01-01',
        nivel_id: 3,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2022-01-01',
        nivel_id: 2,
        docente_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
