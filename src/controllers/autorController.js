import { autor } from "../models/Autor.js";

class AutorController {

    static async listaAutores(req, res){
        const listaAutores = await autor.find({});
        res.status(200).json(listaAutores);
    }

    static async listaAutorPorId(req, res){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);

            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({message: ` Houve um erro ao consultar - ${error.message} `});
        }
    }

    static async cadastraAutores(req, res){
        try {    
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: ` Autor cadastrado com sucesso! `});
        
        } catch (error) {
            res.status(500).json({message: ` Houve um erro ao cadastrar o Autor - ${error.message}`});
        }
    }

    static async atualizarAutor(req, res){
        try {
            await autor.findByIdAndUpdate(req.params.id, req.body);

            res.status(201).json({message: `Autor atualizado com sucesso.`});
            
        } catch (error) {
            res.status(500).json({message: `Houve um erro ao atualizar o autor - ${error.message}`});
        }
    }

    static async deletaAutor(req, res){
        try {
            await autor.findByIdAndDelete(req.params.id);
            
            res.status(201).json({message: `Exclusão do autor realizada com sucesso`});

        } catch (error) {
            res.status(500).json({message: `Houve um erro ao excluir a autor - ${error.message}` });
        }
    }

}

export default AutorController;