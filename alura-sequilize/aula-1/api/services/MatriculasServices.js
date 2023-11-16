const Services = require('./Services')
const database = require('../models')
const Sequelize = require('sequelize')

class MatriculasServices extends Services {
    constructor() {
        super('alura_seq_matriculas')
    }

    async pegaUmRegistroPorIdEEstudanteId(estudanteId, matriculaId) {
        return database[this.nomeDoModelo].findOne({ where: { id: matriculaId, estudante_id: estudanteId } })
    }

    async editarPorIdEEstudanteId(matricula, estudanteId, matriculaId) {
        return database[this.nomeDoModelo].update(matricula, { where: { id: matriculaId, estudante_id: estudanteId } })
    }

    async apagaPorIdEEstudanteId(estudanteId, matriculaId) {
        return database[this.nomeDoModelo].destroy({ where: { id: matriculaId, estudante_id: estudanteId } });
    }

    async pegaPorEstudanteId(id) {
        return database[this.nomeDoModelo].findAll({ where: { estudante_id: id } });
    }

    async pegaPorTurmaId(id) {
        return database[this.nomeDoModelo].findAndCountAll({
            where: { turma_id: id, status: 'confirmado' },
            limit: 2,
            order: [['estudante_id', 'DESC']]
        });
    }

    async turmasLotadas(limiteTurma){
        return await database[this.nomeDoModelo].findAndCountAll({
            where: {
                status: "confirmado"
            },
            attributes: ['turma_id'],
            group: ['turma_id'],
            having: Sequelize.literal(`count(turma_id) > ${limiteTurma}`)
        })
    }
}

module.exports = MatriculasServices