const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello, World Bastards!');
    res.end();
}).listen(3000)

// server.listen(3000);

console.log('Servidor activo en puerto 3000')