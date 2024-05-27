import express from "express";
import conectaNaDatabse from "./config/dbConnect.js";
import livro from "./Models/Livros.js";

const conexao = await conectaNaDatabse();

conexao.on("error ", (erro) => {    
    console.error("erro de conexao", erro);
});

conexao.once("open", () =>{
    console.log("Conexão com o Banco de dados, feita com sucesso!");
});


const app = express();
app.use(express.json()); // middleware - Utilizado para ter acesso a requisições e resposta, caso precise de algum tratamento antes.


// - ROTAS - 
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
    // Apenas um objeto vazio para pegar todos os dados
    const listaLivros = await livro.find({}); // Sempre que tiver o await precisa do async para conversarem na hora do callback
    res.status(200).json(listaLivros);
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
