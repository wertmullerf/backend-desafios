const express = require("express"); //importo express.js
const app = express(); //inicializo express en la variable app
const Contenedor = require("./contenedor");
const PORT = process.env.PORT || 8080;
const contenedor = new Contenedor();

app.get("/", (req, res) => {
    res.send("Server with express.js");
});

app.get("/productos", async (req, res) => {
    const allProducts = await contenedor.getAll();
    res.json(allProducts);
});

app.get("/productoRandom", async (req, res) => {
    const products = await contenedor.getAll(); //obtengo todos los productos
    const numeroRandom = Math.floor(Math.random() * products.length); //para generar un numero random lo multiplico x la cantidad de elemento q traiga products
    res.json(products[numeroRandom]); //le indico un indice random
});

app.listen(PORT, () => {
    console.log(
        `Servidor http escuchando en el puerto http://localhost:${PORT}`
    );
});
