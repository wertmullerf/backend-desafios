import { config } from "dotenv";
import express from "express";
import productsRouter from "./routes/products.js";
//import cartRouter from "./routes/cart.js";
config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/products", productsRouter);
//app.use("/api/cart", cartRouter);

app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
    res.send("segunda entrega");
});
app.get("*", (req, res) => {
    res.status(404).json({
        error: -2,
        description: "This route is not available 🚫",
    });
});
