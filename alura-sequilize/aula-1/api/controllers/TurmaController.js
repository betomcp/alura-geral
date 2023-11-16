// const database = require('../models')
const { TurmasServices } = require('../services')
const turmasServices = new TurmasServices()


class TurmaController {

    static async buscarTodos(req, res) {
        const { dataInicio, dataFim } = req.query
    
        try {
            const turmas = await turmasServices.buscarTodosPorDataInicio(dataInicio, dataFim)
            return res.status(200).json(turmas);
        } catch (error) {
            console.log("Erro: ", error);
            return res.status(500).send({ message: error })
        }
    }

    static async buscarPorId(req, res) {
        const { id } = req.params
        try {
            const turma = await turmasServices.pegaUmRegistro(id);
            return res.status(200).json(turma);
        } catch (error) {
            console.log("Erro: ", error);
            return res.status(500).send({ message: error })
        }
    }

    static async buscarPorNivelId(req, res) {
        const { id } = req.params
        try {
            const turmas = await turmasServices.buscarPorNivelId(id);
            return res.status(200).json(turmas);
        } catch (error) {
            console.log("Erro: ", error);
            return res.status(500).send({ message: error })
        }
    }

    static async buscarPorDocentelId(req, res) {
        const { id } = req.params
        try {
            const turmas = await turmasServices.buscarPorDocentelId(id);
            return res.status(200).json(turmas);
        } catch (error) {
            console.log("Erro: ", error);
            return res.status(500).send({ message: error })
        }
    }

    static async salvarTurma(req, res) {
        const turma = req.body
        try {
            const novaTurma = await turmasServices.salvaUmRegistro(turma);
            return res.status(200).json(novaTurma);
        } catch (error) {
            console.log("Erro: ", error);
            return res.status(500).send({ message: error })
        }
    }

    static async editarTurma(req, res) {
        const { id } = req.params
        const turma = req.body
        try {
            await turmasServices.editarUmRegistro(turma, id);
            const novaTurma = turmasServices.pegaUmRegistro(id);
            return res.status(203).json(novaTurma);
        } catch (error) {
            console.log("Erro: ", error);
            return res.status(500).send({ message: error });
        }
    }

    static async deletarTurma(req, res) {
        const { id } = req.params
        try {
            await turmasServices.apagarUmRegistro(id);
            return res.status(200).send({ message: 'deletada!' });
        } catch (error) {
            console.log("Erro: ", error);
            return res.status(500).send({ message: error })
        }
    }
}


module.exports = TurmaController;