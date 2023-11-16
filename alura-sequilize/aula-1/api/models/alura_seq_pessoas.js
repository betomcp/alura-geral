'use strict';
module.exports = (sequelize, DataTypes) => {
  const alura_seq_pessoas = sequelize.define('alura_seq_pessoas', {
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcValidadora: function (dado) {
          if (dado.length < 3) throw new Error('Nome deve ter mais de 3 caracteres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true, msg: "dado do tipo email invalido"
        }
      }
    },
    role: DataTypes.STRING
  }, {
    tableName: 'alura_seq_pessoas',
    freezeTableName: true,
    paranoid: true,
    defaultScope: {
      where: {
        ativo: true
      }
    },
    scopes: {
      todos: {
        where: {}
      }
      //etc... name: { constraint: value }
    }
  });
  alura_seq_pessoas.associate = function (models) {
    alura_seq_pessoas.hasMany(models.alura_seq_turmas, { foreignKey: "docente_id" })
    alura_seq_pessoas.hasMany(models.alura_seq_matriculas, {
      foreignKey: "estudante_id",
      scope: { status: "confirmado" },
      as: "aulasMatriculadas"
    })
  };
  return alura_seq_pessoas;
};