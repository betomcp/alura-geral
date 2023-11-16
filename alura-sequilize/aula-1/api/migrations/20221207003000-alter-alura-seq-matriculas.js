'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('alura_seq_matriculas', 'deletedAt', {
      allowNUll: true,
      type: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('alura_seq_matriculas', 'deletedAt');
  }
};