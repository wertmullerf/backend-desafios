const express = require("express");
const app = express();
const PORT = 8080;
const Contenedor = require("./src/contenedor");
const contenedor = new Contenedor();
const server = app.listen(PORT, () => {
    console.log(
        `Servidor http escuchando en http://localhost:${server.address().port}`
    );
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", "./views");

app.post("/products", async (req, res) => {
    const { body } = req;
    if (
        body.title.length == 0 ||
        body.price.length == 0 ||
        body.thumbnail.length == 0
    ) {
        //deberia ir una validacion mas firme
        res.json({ error: true, msg: "Some value is missing" });
    } else {
        await contenedor.save(body);
        res.redirect("/products");
    }
});
app.get("/products", async (req, res) => {
    const products = await contenedor.getAll();
    console.log(products);
    let stock;
    if (products.length == 0) {
        stock = false;
    } else {
        stock = true;
    }
    console.log(stock);
    res.render("productList", { products, stock });
});
app.get("/", (req, res) => {
    res.render("form", {});
});
