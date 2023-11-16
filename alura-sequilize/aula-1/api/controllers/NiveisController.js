const { NiveisServices } = require('../services')
const niveisServices = new NiveisServices();

class NiveisController {

    static async buscarTodos(req, res) {
        try {
            const niveis = niveisServices.pegaTodosOsRegistros();
            return res.status(200).json(niveis)
        } catch (error) {
            return res.status(500).send({ message: error })
        }
    }

    static async buscarPorId(req, res) {
        const { id } = req.params
        try {
            const nivel = await niveisServices.pegaUmRegistro(id);
            return res.status(200).json(nivel)
        } catch (error) {
            return res.status(500).send({ message: error })
        }
    }

    static async salvarNivel(req, res) {
        const nivel = req.body
        try {
            const novoNivel = await niveisServices.salvaUmRegistro(nivel);
            return res.status(200).json(novoNivel)
        } catch (error) {
            return res.status(500).send({ message: error })
        }
    }

    static async editarNivel(req, res) {
        const { id } = req.params;
        const nivel = req.body;
        try {
            await niveisServices.editarUmRegistro(nivel, id);
            const nivelEditado = await niveisServices.pegaUmRegistro(id);
            return res.status(200).json(nivelEditado);
        } catch (error) {
            return res.status(500).send({ message: error });
        }
    }

    static async deletarNivel(req, res) {
        const { id } = req.params;
        try {
            await niveisServices.apagarUmRegistro(id);
            return res.status(200).send({ message: "deletado!" });
        } catch (error) {
            return res.status(500).send({ message: error });
        }
    }
}

module.exports = NiveisController;