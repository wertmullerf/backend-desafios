const { Router } = require("express");
const productsRouter = Router();
const veryfyRole = require("../middleware/admin");
const Contenedor = require("../container/contenedor");
const productController = new Contenedor("products");
const Product = require("../models/productModel");

productsRouter.get("/", async (req, res) => {
    const productList = await productController.getAll();
    if (productList) {
        res.json(productList);
    } else {
        res.json({
            error: true,
            msj: "The product list was not found",
        });
    }
});
productsRouter.get("/:id", veryfyRole, async (req, res) => {
    const { id } = req.params;
    const productList = await productController.getAll();
    const product = await productController.getById(id);
    if (id > productList.length) {
        res.json({
            error: "This product was not found",
            aviableProducts: productList,
        });
    } else {
        res.json(product);
    }
});

productsRouter.delete("/:id", veryfyRole, async (req, res) => {
    const { id } = req.params;
    const products = await productController.getAll();

    if (id > products.length) {
        res.json({
            error: "This product was not found",
            productList: products,
        });
    } else {
        await productController.deleteById(id);
        res.json({
            success: true,
            msg: "This product was deleted successfully.",
        });
    }
});
productsRouter.post("/", veryfyRole, async (req, res) => {
    const { body } = req;
    let product = new Product(
        body.title,
        body.price,
        body.description,
        body.stock,
        body.thumbnail
    ); //inicializo la clase Product para asi poder enviarle todos los datos mas la fecha, el metodo save se encargara de hacer el push al json.
    await productController.save(product);
    const products = await productController.getAll();
    res.json({
        msg: "The product was uploaded successfully",
        productList: products,
    });
});
productsRouter.put("/:id", veryfyRole, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, price, description, stock, thumbnail } = req.body;
        await productController.updateById(
            id,
            title,
            price,
            description,
            stock,
            thumbnail
        );
        res.json({ succes: true });
    } catch (error) {
        res.json({ error: true, msj: "error" });
    }
});
module.exports = productsRouter;
