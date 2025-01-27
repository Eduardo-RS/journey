import express from 'express';
import morgan from 'morgan';

const app = express();


app.use(morgan('dev'));

//Middleware
app.use((req, res, next) => {
    console.log('The cliente is here');
    console.log(`Route: ${req.url} Method: ${req.method}`); // Sirve para obtener el url y el metodo usado en la solicitud
    next();
})


app.get('/profile', (req, res) => {
    res.send("Hello world middlewares");
})

app.get('/about', (req, res)=>{
    res.send('About us')
})

app.listen(3000);
console.log(`Server working on port: ${3000}`)