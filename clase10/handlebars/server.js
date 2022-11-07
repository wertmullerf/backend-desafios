const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const PORT = 8080;
const Contenedor = require("./src/contenedor");
const contenedor = new Contenedor();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
        defaultLayout: "index.hbs",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
    })
);
app.listen(PORT, () => {
    console.log(`>> Server has been opened at http://localhost:${PORT}`);
});
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
    res.render("pages/productList", { products, stock });
});
app.get("/", (req, res) => {
    res.render("pages/form", {});
});
