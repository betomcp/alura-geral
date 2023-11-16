import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(

    {
        id: { type: String },
        titulo: { type: String, required: true },
        pgs: { type: Number },
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores' }
    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;