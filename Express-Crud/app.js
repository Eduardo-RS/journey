import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev")); // Middleware para mostrar HTTP Methods

app.use(express.json()); // Middleware para leer json

let products = [
  {
    id: 1,
    productName: "Laptop",
    brand: "Apple",
    model: "Macbook Pro 2023",
    pricing: 2000,
  },
];

app.get("/home", (req, res) => {
  res.send("Hello world!");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  console.log(typeof req.params.id);
  const findProduct = products.find((product) => {
    return product.id === parseInt(req.params.id); // Valida si el ID ingresado coincidde con un ID existente
  });
  if (!findProduct) {
    return res.status(404).json({ message: "Product not found" }); // Retornar al cliente un codigo de estatus al cliente
  }
  console.log(findProduct);
  res.json(findProduct);
});

app.put("/products", (req, res) => {
  res.send("Updating products");
});

app.post("/products", (req, res) => {
  // console.log(req.body)
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct); // Insertar en el arreglo products
  res.send(newProduct); // Mostrar al cliente
});


//Borrar un producto pero validar que el producto existe
app.delete("/products/:id", (req, res) => {
    console.log(req.params);
    const findProduct = products.find((product) => {
        return product.id === parseInt(req.params.id);
    })
    if(!findProduct){
        return res.status(404).json({ message: 'Product not found' });
    }
    console.log(findProduct);
  res.send("Deleting product");
});

app.patch("/products", (req, res) => {
  res.send("Updating product");
});

app.listen(3000);
console.log(`Hello world ${3000}`);
