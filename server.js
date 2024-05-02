import http from "http";

const PORT = 3000;
const rotas = {
    "/": "Home! 2",
    "/livros": "Entrei na rota livros",
    "/autores": "Essa rota do autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]);

});

server.listen(PORT, () => {console.log("Servidor está ouvindo!!");} );