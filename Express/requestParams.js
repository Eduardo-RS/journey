import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

//Para recibir datos dinamicos usando request Params

app.get("/users/:userId", (req, res) => {
  // console.log(req.params); // Muesta el userName que se ingresa desde la peticion { userId: 'EduardoRS' }
  console.log(req.params.userId); // Muesta solo el nombre del usario EduardoRS
  res.send(`Hello world ${req.params.userId}`);
});

// Recibir parametros y extraer el tipo de dato y sumarlos
app.get("/add/:x/:y", (req, res) => {
  console.log(req.params.x);
  console.log(req.params.y);
  const add = parseInt(req.params.x) + parseInt(req.params.y);
  console.log(add);
  res.send(`Result: ${add}`);
});

// Alternativa 1 para recibir parametros usando destructuracion de objetos
app.get("/sum/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const add = parseInt(a) + parseInt(b);
  console.log(add);
  res.send(`Result: ${add}`);
});

// Alternativa 2 para extraer parametros
app.get("/sumar/:a/:b", ({ params: { a, b } }, res) => {
  res.send(`Result: ${parseInt(a) + parseInt(b)}`);
});

// Retornar un archivo
app.get("/users/:username/photo", (req, res) => {
    console.log(req.params);
  if (req.params.username === "LaloRS") {
    return res.sendFile("/Users/lalors/Backend Path/Express/Mando.jpg/Mando.jpg")
  }
  res.send("User have not access");
});

//Recibir varios parametros en un endpoint
app.get("/users/:userName/age/:age", (req, res) => {
  console.log(req.params);
  res.send(`Hello ${req.params.userName} you age is ${req.params.age}`);
})

app.listen(3000);
console.log(`Server working on port: ${3000}`);
