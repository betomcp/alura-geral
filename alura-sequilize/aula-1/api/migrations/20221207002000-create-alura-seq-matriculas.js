'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('alura_seq_matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      estudante_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'alura_seq_pessoas', 
          key: 'id'
        }
      },
      turma_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'alura_seq_turmas', 
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('alura_seq_matriculas');
  }
};