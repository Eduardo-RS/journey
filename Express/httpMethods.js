import express from "express";

const app = express();

// Routing

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/Products", (req, res) => {
  res.send("Our products are");
});

app.get("/users", (req, res) => {
    res.send("Full user list")
})

app.get("/About", (req, res) => {
    // Se puede Validar informacion
    // Consultar a bases de datos
    // Procesar datos
  res.send("About us");
});

// Response para rutas que no existen
// app.use((req, res) => {
//   res.send(`Ups! this page doesn't exist`);
// });


// POST - Create
app.post('/users', (req, res) => {
    res.send('Creating products');
})

app.put('/users', (req, res) => {
    res.send('Users updated');
})

// Metodo para actualizar algo especifico
app.patch('/users', (req, res) => {
    res.send('Update a filed of an user')
})

app.delete('/users', (req, res) => {
    res.send('User deleted')
})

app.listen(5000);