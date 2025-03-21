const http = require ('http');

// Cria um servidor http
const server = http.createServer((req, res) => {
    res.statusCode = 200; // define o status como 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Define o tipo de conteúdo como texto
    res.end('Olá, pessoal"'\n); // Envia a Resposta
});

// Define a porta em que o servidor irá escutar
const port = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
})
