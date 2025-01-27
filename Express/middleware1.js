import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan('dev'));


// Ruta accesible antes de llegar al middleware
app.get('/about', (req, res) => {
    res.send('About us');
})

//Practica Crear dos middlewares usando query antes de que el request del cliente llegue al dashboard

app.use((req, res, next) => {
    console.log('Client request is here');
    next();
})

app.use((req, res, next)=> {
    console.log(`Route: ${req.url} Method: ${req.method}`); // Sirve para obtener el url y el metodo usado en la solicitud
    if(req.query.user === "erendon"){
        // return res.send(`Hola ${req.query.user}`);
        next();
    } else {
        return res.send(`You don't have access`);
    }
})

app.get('/dashboard', (req, res) => {
    res.send('Hello world dashboard');
})

app.get('/profile', (req, res) => {
    res.send(`Hello from my profile`);
})

app.listen(3000);
console.log(`Server working on port: ${3000}`);