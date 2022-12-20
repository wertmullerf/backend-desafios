import ContainerMongo from "../../container/ContainerMongo.js";
import { ProductModel } from "../../models/Product.js";

export default class ProductDaoMongo extends ContainerMongo {
    constructor() {
        super({
            name: ProductModel.ProductsCollection,
            schema: ProductModel.ProductSchema,
        });
    }
}
