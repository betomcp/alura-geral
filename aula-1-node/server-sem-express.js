//Servidor Node sem utilizar framework. Apenas com funcionaliddes nativas

const http = require("http");
const port = 3000;

const rotas = {
    '/': 'salve memo',
    '/livros': 'pg livros',
    '/autores': 'pg lista autor',
    'editora': 'pg editoras'
}

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
});


server.listen(port, () =>{
    console.log(`Servidor rodando: http://localhost:${port}`);
});