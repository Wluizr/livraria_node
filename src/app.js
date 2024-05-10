import express from "express";
import conectaNaDatabse from "./config/dbConnect.js";

const conexao = await conectaNaDatabse();

conexao.on("error ", (erro) => {    
    console.error("erro de conexao", erro);
});

conexao.once("open", () =>{
    console.log("Conexão com o Banco de dados, feita com sucesso!");
});


const app = express();
app.use(express.json()); // middleware - Utilizado para ter acesso a requisições e resposta, caso precise de algum tratamento antes.



function buscaLivro(id){
    return livros.findIndex(livros => { 
        return livros.id === Number(id)
    });
}

// - ROTAS - 
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {    
    const index = buscaLivro(req.params.id);

    res.status(200).json(livros[index]);
});

// Req e Res, é uma responsabilidade do framework express.
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro excluído com sucesso");
});




export default app;
