const { PessoaServices, MatriculasServices } = require('../services')
const pessoasServices = new PessoaServices()
const matriculasServices = new MatriculasServices()

class PessoaController {

    static async pegaTodasAsPessoasAtivas(req, res) {
        try {
            const todasAsPessoasAtivas = await pessoasServices.pegaRegistrosAtivos();
            return res.status(200).json(todasAsPessoasAtivas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarPorId(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await pessoasServices.pegaUmRegistro(id);
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async salvarPessoa(req, res) {
        const pessoa = req.body;
        try {
            const novaPessoa = await pessoasServices.salvaUmRegistro(pessoa);
            return res.status(201).json({ message: "Pessoa cadastrada!", pessoa: novaPessoa });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

    static async editarPessoa(req, res) {
        const pessoa = req.body;
        try {
            await pessoasServices.editarUmRegistro(pessoa, pessoa.id);
            const pessoaEditada = await pessoasServices.pegaUmRegistro(pessoa.id);
            return res.status(203).json({ message: "Pessoa editada!", pessoa: pessoaEditada });
        }
        catch (error) {
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

    static async deletarPessoa(req, res) {
        const id = req.params.id;
        try {
            await pessoasServices.apagarUmRegistro(id);
            return res.status(203).json({ message: "Pessoa deletada!" });
        }
        catch (error) {
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

    static async restauraPessoa(req, res) {
        const { id } = req.params
        try {
            await pessoasServices.restauraUmRegistro(id);
            return res.status(200).json({ message: 'Restaurado!' })
        } catch (error) {
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

    static async pegaUmaMatricula(req, res) {
        const { id, matriculaId } = req.params
        try {
            const matricula = await matriculasServices.pegaUmRegistroPorIdEEstudanteId(Number(id), Number(matriculaId))
            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

    static async salvarMatricula(req, res) {
        const { id } = req.params
        const matricula = { ...req.body, estudante_id: Number(id) }
        try {
            const novaMtricula = matriculasServices.salvaUmRegistro(matricula)
            return res.status(201).json({ message: "Matricula cadastrada!", matricula: novaMtricula });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

    static async editarMatricula(req, res) {
        const { id, matriculaId } = req.params
        const matricula = req.body
        try {
            await matriculasServices.editarPorIdEEstudanteId(matricula, id, matriculaId);
            const novaMtricula = await matriculasServices.pegaUmRegistro(id);
            return res.status(201).json({ message: "Matricula editada!", matricula: novaMtricula });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

    static async deletarMatricula(req, res) {
        const { id, matriculaId } = req.params
        try {
            await matriculasServices.apagaPorIdEEstudanteId(id, matriculaId);
            return res.status(201).json({ message: "Matricula deletada!" });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

    static async pegaMatriculas(req, res) {
        const { estudanteId } = req.params
        try {
            const pessoa = await pessoasServices.pegaUmRegistro(estudanteId);
            const matriculas = await pessoa.getAulasMatriculadas();
            return res.status(201).json(matriculas);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

    static async pegaMatriculasPorTurmaId(req, res) {
        const { turmaId } = req.params
        try {
            const matriculas = await matriculasServices.pegaPorTurmaId(turmaId);
            return res.status(200).json(matriculas)
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

    static async pegatTurmasLotadas(req, res) {
        const lotacaoTurma = 2;
        try {
            const turmasLotadas = await matriculasServices.turmasLotadas(lotacaoTurma)
            return res.status(200).json(turmasLotadas.count)
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

    static async cancelaPessoa(req, res) {
        const { id } = req.params;
        try {
            await pessoasServices.cancelaPessoaEMatriculas(id)
            return res.status(200).json({ message: "Estudante cancelado! (matriculas também)" })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Erro: ", error });
        }
    }

}

module.exports = PessoaController;