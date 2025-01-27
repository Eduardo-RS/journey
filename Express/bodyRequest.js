import express from 'express';
import morgan from 'morgan';

// Declara la variable de nuestro servidor
const app = express();
app.use(morgan('dev'))

app.use(express.text()); // Sin esta linea, el req.body no podra interpretar lo que viene del post usando txt
app.use(express.json());// Sin esta linea, el req.body no podra interpretar lo que viene del post usando json
app.use(express.urlencoded({extended: false})); // Sirve para leer datos de un formulario


app.post('/users', (req, res) => {
    console.log(req.body) // Para leer lo que viene del cliente
    res.send('New user created');
})

app.listen(3000);
console.log(`Express server working on ${3000}`);