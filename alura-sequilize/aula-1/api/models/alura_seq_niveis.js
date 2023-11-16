'use strict';
module.exports = (sequelize, DataTypes) => {
  const alura_seq_niveis = sequelize.define('alura_seq_niveis', {
    descr_nivel: DataTypes.STRING
  }, {
    tableName: 'alura_seq_niveis',
    freezeTableName: true,
    paranoid: true
  });
  alura_seq_niveis.associate = function(models) {
    alura_seq_niveis.hasMany(models.alura_seq_turmas, { foreignKey: "nivel_id" })
  };
  return alura_seq_niveis;
};