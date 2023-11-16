// const database = require('../models')
const Services = require('../services/Services.js')
const matriculasServices = new Services('alura_seq_matriculas')

class MatriculaConroller {

    static async buscarTodos(req, res) {
        try {
            const matriculas = await matriculasServices.pegaTodosOsRegistros();
            return res.status(200).json(matriculas);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async buscarPorId(req, res) {
        const { id } = req.params;
        try {
            const matricula = await matriculasServices.pegaUmRegistro(id);
            return res.status(200).json(matricula);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async buscarPorEstudanteId(req, res) {
        const { id } = req.params;
        try {
            const matriculas = await database.alura_seq_matriculas.findAll({where: {estudante_id: id}});
            return res.status(200).json(matriculas);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async buscarPorTurmaId(req, res) {
        const { id } = req.params;
        try {
            const matriculas = await matriculasServices.buscarPorEstudanteId(id)
            return res.status(200).json(matriculas);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async salvarMatricula(req, res) {
        const matricula = req.body;
        try {
            const novaMatricula = await matriculasServices.salvaUmRegistro(matricula);
            return res.status(201).json(novaMatricula);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async editarMatricula(req, res) {
        const matricula = req.body;
        const { id } = req.params
        try {
            await matriculasServices.editarUmRegistro(matricula, id);
            const metriculaEditada = await matriculasServices.pegaUmRegistro(id);
            return res.status(203).json(metriculaEditada);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarMatricula(req, res) {
        const { id } = req.params
        try {
            await matriculasServices.apagarUmRegistro(id);
            return res.status(202).send({message: "deletada!"});
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

}


module.exports = MatriculaConroller;