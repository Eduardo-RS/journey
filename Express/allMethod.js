import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

app.get("/users", (req, res) => {
  res.send("Hello world");
});

app.all("/info", (req, res) => {
  res.send("Hello world with All Method");
});

app.listen(3000);
console.log(`Server working on port: ${3000} `);
