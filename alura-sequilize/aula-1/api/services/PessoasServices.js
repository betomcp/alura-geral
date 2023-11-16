const database = require('../models')
const Services = require('./Services')
// const Sequelize = require('sequelize')

class PessoaServices extends Services {
    constructor() {
        super('alura_seq_pessoas')
        this.matriculas = new Services('alura_seq_matriculas')
    }

    async pegaRegistrosAtivos(where = {}) {
        return database[this.nomeDoModelo].findAll({ where: { ...where } })
    }

    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo].scope('todos').findAll({ where: { ...where } })
    }

    async cancelaPessoaEMatriculas(estudanteId) {
        return database.sequelize.transaction(async transacao => {
            await super.editarUmRegistro({ ativo: false }, estudanteId, { transaction: transacao })
            await this.matriculas.editarRegistros({ status: "cancelado" }, { estudante_id: estudanteId }, { transaction: transacao })
        })
    }
}

module.exports = PessoaServices