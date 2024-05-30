import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => { // app é uma instancia de express.

    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
    // Nesse cenário irá pegar todas as rotas que está dentro de livrosRoutes;
    app.use(express.json(), livros); // middleware - Utilizado para ter acesso a requisições e resposta, caso precise de algum tratamento antes. 
};

export default routes;
