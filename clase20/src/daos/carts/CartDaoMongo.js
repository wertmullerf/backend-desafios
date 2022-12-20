import ContainerMongo from "../../container/ContainerMongo.js";
import { CartModel } from "../../models/Cart.js";

export default class CartDaoMongo extends ContainerMongo {
    constructor() {
        super({
            name: CartModel.CartCollection,
            schema: CartModel.CartSchema,
        });
    }

    async getById(id) {
        const response = await this.model.findById(id).populate("products");

        return response;
    }
}
//console.log(CartModel.CartSchema);
