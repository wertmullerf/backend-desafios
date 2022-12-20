import { Router } from "express";
const productsRouter = Router();
import verifyRole from "../middleware/admin.js";
import instancia from "../daos/index.js";
const productController = new instancia.product();
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
productsRouter.get("/:id", verifyRole, async (req, res) => {
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

productsRouter.delete("/:id", verifyRole, async (req, res) => {
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
productsRouter.post("/", verifyRole, async (req, res) => {
    const { body } = req;
    // let product = new Product(
    //     body.title,
    //     body.price,
    //     body.description,
    //     body.stock,
    //     body.thumbnail
    // ); //inicializo la clase Product para asi poder enviarle todos los datos mas la fecha, el metodo save se encargara de hacer el push al json.
    await productController.save(body);
    const products = await productController.getAll();
    res.json({
        msg: "The product was uploaded successfully",
        productList: products,
    });
});
productsRouter.put("/:id", verifyRole, async (req, res) => {
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
export default productsRouter;
