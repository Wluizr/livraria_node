import livros from "../models/Livros.js";
import { autor } from "../models/Autor.js";


class LivroController{

    // static = utilizar o método antes de instanciar uma classe
    // async = utiliza para acessar o BD, de forma asincrona
    static async listarLivros(req, res){
        
        // Apenas um objeto vazio para pegar todos os dados
        const listaLivros = await livros.find({}); // Sempre que tiver o await precisa do async para conversarem na hora do callback
        res.status(200).json(listaLivros);
    }

    static async listaLivroPorId(req, res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livros.findById(id);

            res.status(200).json(livroEncontrado);
        }catch(erro){
            res.status(500).json(`${erro.message} - Falha na requisição de buscar livro por Id`);
        }        
    }

    // Req e Res, é uma responsabilidade do framework express.
    static async cadastrarLivro(req, res){
        try{
            const novoLivro = req.body;
            const autorEncontrado =  await autor.findById(novoLivro.autor);

            // Operador de espalhamento do JavaScript;
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = livros.create(livroCompleto);

            res.status(201).json({message: "Criado com sucesso", livro: livroCriado});
        }catch (erro) {
            res.status(500).json({message: `${erro.message} - Falhar ao cadastrar um Livro!`});
        }   
    }

    static async atualizarLivro(req, res){
        try {
            const id = req.params.id;            
            await livros.findByIdAndUpdate(id, req.body);

            res.status(200).json({message: "Livro atualizado com sucesso!"});
        } catch (erro) {
            res.status(500).json(`${erro.message} - Falha na atualização de buscar livro por Id`);
        }
    }

    static async deletaLivro(req, res){
        try {
            const id = req.params.id;
        
            await livros.findByIdAndDelete(id);

            res.status(200).json({message: `Livro excluído com sucesso. `});

        } catch (erro) {
            res.status(500).json(`${erro.message} - Houve um erro para excluir o livro.`);
        }
    }
}

export default LivroController;