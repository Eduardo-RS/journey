const http = require("http");
// console.log('First');
// console.log('Second');
// console.log('Third');

// setTimeout(() => {
//     console.log('Fourth');
// }, 3000);

// console.log('Fifth');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Page not found");
    return res.end();
  }
  if (req.url === "/about") {
    res.write("About page");
    return res.end();
  }
  res.write("Hello, World Bastards!");
  res.end();
});

server.listen(3000);
