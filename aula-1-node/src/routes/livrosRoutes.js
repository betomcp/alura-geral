import express from "express";
import LivrosController from "../controller/livrosController.js";

const livros = express.Router();

livros
    .get("/livros/busca", LivrosController.listarLivrosPorPgs)
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/:id", LivrosController.buscaLivro)
    .post("/livros", LivrosController.cadastrarLivro)
    .put("/livros/:id", LivrosController.atualizarLivro)
    .delete("/livros/:id", LivrosController.excluirLivro)

export default livros;
