import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
//modelo que representa a tabela no banco de dados

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId}, // para criação de um ID único
    titulo: {type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autorSchema
}, {versionKey: false});

const livros = mongoose.model("livros", livroSchema);

export default livros;

