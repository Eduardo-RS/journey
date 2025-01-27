import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

//GET

app.get("/users", (req, res) => {
  // console.log(req.params);
  res.send("Hello World");
});

app.get("/users/:userName", (req, res) => {
  console.log(req.query); // Recibe la consulta (query) del cliente Ejemplo del request : http://localhost:3000/users/EduardoRS?x=KarlaRS&age=40 resultado de la consola { x: 'KarlaRS', age: '40' }
  console.log(req.query.user);
  console.log(req.query.age);
  res.send(req.params.userName);
});

app.get('/search', (req, res) => {
    console.log(req.query);
    if(req.query.q === 'books'){// query search?q=books
        return res.send("Programming library");
    } else {
        return res.send("Empty Library")
    }
})

app.listen(3000);
console.log(`Server working on ${3000}`);
