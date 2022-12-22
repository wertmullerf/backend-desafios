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

export const ProductModel = { ProductsCollection, ProductSchema };
