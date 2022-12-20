import { Schema } from "mongoose";

const CartCollection = "carts";

const CartSchema = new Schema({
    timestamp: { type: String, required: true, max: 100 },
    products: [{ type: Schema.Types.ObjectId, ref: "products" }],
});

export const CartModel = { CartCollection, CartSchema };
