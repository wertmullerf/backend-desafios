// const { Router } = require("express");
// const cartRouter = Router();
// const Cart = require("../models/cartModel");
// const Contenedor = require("../container/contenedor");
// const cartController = new Contenedor("cart");
// const productController = new Contenedor("products");
// cartRouter.get("/", async (req, res) => {
//     const cartList = await cartController.getAll();
//     if (cartList) {
//         res.json(cartList);
//     } else {
//         res.json({
//             error: true,
//             msj: "Cart list not found 🥲",
//         });
//     }
// });
// cartRouter.post("/", async (req, res) => {
//     let cart = new Cart();
//     res.json(cartController.save(cart));
// });
// cartRouter.delete("/:id", async (req, res) => {
//     const { id } = req.params;
//     res.json(cartController.deleteById(id));
// });

// cartRouter.get("/:id/products", async (req, res) => {
//     const { id } = req.params;
//     const cart = await cartController.getById(id);
//     if (!cart) {
//         res.json({ response: "Product not found 🥲" });
//     } else {
//         res.json({ id: cart.id, products: cart.products });
//     }
// });
// cartRouter.post("/:id/products/:id_prod", async (req, res) => {
//     const { id, id_prod } = req.params;
//     const productoPedido = await productController.getById(parseInt(id_prod));
//     if (productoPedido != null) {
//         const allCarts = await cartController.getAll();
//         const cartPedido = allCarts.find(
//             (item) => Number(item.id) === Number(id)
//         );
//         const newProductList = [...cartPedido.products, productoPedido];
//         await cartController.updateCartById(
//             cartPedido.id,
//             cartPedido.timestamp,
//             newProductList
//         );
//         res.json({ succes: true, msg: "Product added to the cart 😁" });
//     } else {
//         res.json({ error: true, msg: "Product not found 🥲" });
//     }
// });
// cartRouter.delete("/:id/products/:id_prod", async (req, res) => {
//     const { id, id_prod } = req.params;
//     let idNumber = Number(id_prod);
//     const allCarts = await cartController.getAll();
//     const cartPedido = allCarts.find((item) => Number(item.id) === Number(id));
//     const newCarrito = cartPedido.products.filter(
//         (item) => Number(item.id) !== idNumber
//     );
//     if (newCarrito.length === cartPedido.products.length) {
//         res.json({ error: true, msg: "Product not found 🥲" });
//     } else {
//         await cartController.updateCartById(
//             cartPedido.id,
//             cartPedido.timestamp,
//             newCarrito
//         );
//         res.json({
//             succes: true,
//             msg: "Your product was deleted successfully🟢!",
//         });
//     }
// });
// export default cartRouter;
