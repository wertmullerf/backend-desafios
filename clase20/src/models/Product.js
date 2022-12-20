import { Schema, model } from "mongoose";
const ProductsCollection = "products";
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        max: 500,
    },
    stock: {
        type: Number,
        required: true,
        max: 5000,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});
ProductSchema.set("toJSON", {
    transform: (_, response) => {
        response.id = response._id;
        delete response.__v;
        delete response._id;
        return response;
    },
});
export const ProductModel = { ProductsCollection, ProductSchema };
