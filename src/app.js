import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await conectaNaDatabase();

conexao.on("error ", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () =>{
    console.log("Conexão com o Banco de dados, feita com sucesso!");
});

const app = express();
routes(app);

// - ROTAS -

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro excluído com sucesso");
});

export default app;
