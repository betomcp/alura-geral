import express from "express";
import AutoresController from "../controller/autoresController.js";

const autores = express.Router();

autores
    .get("/autores", AutoresController.listarAutores)
    .get("/autores/:id", AutoresController.buscaAutor)
    .post("/autores", AutoresController.cadastrarAutor)
    .put("/autores/:id", AutoresController.atualizarAutor)
    .delete("/autores/:id", AutoresController.excluirAutor)

export default autores;
