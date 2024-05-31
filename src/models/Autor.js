import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, require: true},
    nacionalidade: {type: String, require: false}

}, {versionKey: false});

const autor = mongoose.model("autores", autorSchema);

export {autor, autorSchema}; // exportamos o autorSchema, para que possamos importar o autor como uma propriedade de livro.