const Services = require('./Services')
const Sequelize = require('sequelize')
const database = require('../models')

const Op = Sequelize.Op

class TurmasServices extends Services {
    constructor(){
        super('alura_seq_turmas')
    }

    async buscarTodosPorDataInicio(dataInicio, dataFim){
        const where = {};

        dataInicio || dataFim ? where.data_inicio = {} : null;
        dataInicio ? where.data_inicio[Op.gte] = dataInicio : null
        dataFim ? where.data_inicio[Op.lte] = dataFim : null

        return await database[this.nomeDoModelo].findAll({ where });
    }

    async buscarPorNivelId(id){
        return await database[this.nomeDoModelo].findAll({where: {nivel_id: id}})
    }
    
    async buscarPorDocentelId(id){
        return await database[this.nomeDoModelo].findAll({where: {docente_id: id}})
    }
}

module.exports = TurmasServices