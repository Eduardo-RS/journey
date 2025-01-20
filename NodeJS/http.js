const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
      res.write("Welcome to my first node js server");
      return res.end();
    }
    if (req.url === "/about") {
      res.write("Acerca de");
      return res.end();
    }
    res.write("Hello, World Bastards!");
    res.end();
  })
  .listen(3000);

// server.listen(3000);

console.log("Servidor activo en puerto 3000");
