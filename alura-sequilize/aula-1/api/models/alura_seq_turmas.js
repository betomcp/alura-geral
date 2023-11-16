'use strict';
module.exports = (sequelize, DataTypes) => {
  const alura_seq_turmas = sequelize.define('alura_seq_turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {
    tableName: 'alura_seq_turmas',
    freezeTableName: true,
    paranoid: true
  });
  alura_seq_turmas.associate = function (models) {
    alura_seq_turmas.hasMany(models.alura_seq_matriculas, { foreignKey: "turma_id" })
    alura_seq_turmas.belongsTo(models.alura_seq_pessoas, { foreignKey: "docente_id" })
    alura_seq_turmas.belongsTo(models.alura_seq_niveis, { foreignKey: "nivel_id" })

  };

  return alura_seq_turmas;
};