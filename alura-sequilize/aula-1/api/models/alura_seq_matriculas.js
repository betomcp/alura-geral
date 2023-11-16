'use strict';
module.exports = (sequelize, DataTypes) => {
  const alura_seq_matriculas = sequelize.define('alura_seq_matriculas', {
    status: DataTypes.STRING
  }, {
    tableName: 'alura_seq_matriculas',
    freezeTableName: true,
    paranoid: true
  });
  alura_seq_matriculas.associate = function(models) {
    alura_seq_matriculas.belongsTo(models.alura_seq_pessoas, { foreignKey: "estudante_id" })
    alura_seq_matriculas.belongsTo(models.alura_seq_turmas, { foreignKey: "turma_id" })
  };
  return alura_seq_matriculas;
};