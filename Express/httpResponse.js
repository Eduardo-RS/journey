import express from "express";
import morgan from "morgan";

const app = express();

// Routing
app.use(morgan("dev"))
app.get("/", (req, res) => {
  res.send("Hello World 2");
});

app.get("/myFile", (req, res) => {
  res.sendFile("./Mando.jpg", {
    root: __dirname,
  });
});

app.get("/users", (req, res) => {
  res.json({
    name: "Eduardo RS",
    age: 29,
    nickname: "Lalo RS",
    address: {
        city: "Tijuana",
        street: "Villa del Sol",
    },
  });
});

app.get('/users/isAlive', (req, res) => {
    res.sendStatus(204);
})

app.listen(4001);
console.log(`Server working on ${4001}`);
