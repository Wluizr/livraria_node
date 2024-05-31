import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listaAutores);
routes.get("/autores/:id", AutorController.listaAutorPorId)
routes.post("/autores", AutorController.cadastraAutores);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.deletaAutor);

export default routes;
