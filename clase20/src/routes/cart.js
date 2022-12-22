/*import { Router } from "express";
const cartRouter = Router();
import { CartDao } from "../daos/index.js";
import { ProductDao } from "../daos/index.js";
cartRouter.get("/", async (req, res) => {
    const cartList = await CartDao.getAll();
    if (cartList) {
        res.json(cartList);
    } else {
        res.json({
            error: true,
            msj: "Cart list not found 🥲",
        });
    }
});
cartRouter.post("/", async (req, res) => {
    const cart = { timestamp: Date.now().toLocaleString(), products: [] };
    res.json(CartDao.save(cart));
});
cartRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    res.json(CartDao.deleteById(id));
});

cartRouter.get("/:id/products", async (req, res) => {
    const { id } = req.params;
    const cart = await CartDao.getById(id);
    if (!cart) {
        res.json({ response: "Product not found 🥲" });
    } else {
        res.json({ id: cart.id, products: cart.products });
    }
});
cartRouter.post("/:id/products/:id_prod", async (req, res) => {
    const { id, id_prod } = req.params;
    const productoPedido = await ProductDao.getById(parseInt(id_prod));
    if (productoPedido != null) {
        const allCarts = await CartDao.getAll();
        const cartPedido = allCarts.find(
            (item) => Number(item.id) === Number(id)
        );
        const newProductList = [...cartPedido.products, productoPedido];
        await CartDao.updateCartById(
            cartPedido.id,
            cartPedido.timestamp,
            newProductList
        );
        res.json({ succes: true, msg: "Product added to the cart 😁" });
    } else {
        res.json({ error: true, msg: "Product not found 🥲" });
    }
});
cartRouter.delete("/:id/products/:id_prod", async (req, res) => {
    const { id, id_prod } = req.params;
    let idNumber = Number(id_prod);
    const allCarts = await CartDao.getAll();
    const cartPedido = allCarts.find((item) => Number(item.id) === Number(id));
    const newCarrito = cartPedido.products.filter(
        (item) => Number(item.id) !== idNumber
    );
    if (newCarrito.length === cartPedido.products.length) {
        res.json({ error: true, msg: "Product not found 🥲" });
    } else {
        await CartDao.updateCartById(
            cartPedido.id,
            cartPedido.timestamp,
            newCarrito
        );
        res.json({
            succes: true,
            msg: "Your product was deleted successfully🟢!",
        });
    }
});
export default cartRouter;
*/
