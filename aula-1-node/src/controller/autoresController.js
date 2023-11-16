import autores from "../models/Autor.js";

class AutoresController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    static buscaAutor = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message: "Erro ao buscar autores: " + err.message});
            }else{
                res.status(200).json(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar autor` });
            } else {
                res.status(201).send(autor.toJSON());
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: "Erro ao atualizar"});
            }else{
                res.status(203).send({message: "autore atualizado com sucesso"});
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) =>{
            if(err){
                res.status(500).send({message: "Erro ao deletar: " + err.message});
            }else{
                res.status(200).send({message: "autor removido com sucesso"});
            }
        })
    }
}

export default AutoresController;