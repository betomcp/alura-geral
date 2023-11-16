import livros from "../models/Livro.js";

class LivrosController {

    static listarLivros = (req, res) => {
        livros.find().populate('autor').exec((err, livros) => {
            res.status(200).json(livros);
        })
    }

    static listarLivrosPorPgs = (req, res) => {
        const pgs = parseInt(req.query.pgs);

        livros.find({"pgs": pgs}, {}, (err, livros) => {
            if(err){
                res.status(500).send({message: "Erro ao buscar"})
            }else{
                res.status(200).json(livros);
            }
        })
    }

    static buscaLivro = (req, res) => {
        const id = req.params.id;
        livros.findById(id).populate('autor', 'nome').exec((err, livros) => {
            if (err) {
                res.status(400).send({ message: "Erro ao buscar livro: " + err.message });
            } else {
                res.status(200).json(livros);
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar livro` });
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: "Erro ao atualizar" });
            } else {
                res.status(203).send({ message: "Livro atualizado com sucesso" });
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: "Erro ao deletar: " + err.message });
            } else {
                res.status(200).send({ message: "Livro removido com sucesso" });
            }
        })
    }
}

export default LivrosController;