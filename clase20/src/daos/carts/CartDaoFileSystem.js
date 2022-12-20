import ContainerFileSystem from "../../container/ContainerFileSystem.js";

class CartDaoFileSystem extends ContainerFileSystem {
    constructor() {
        super("src/db/cart.json");
    }
}
export default CartDaoFileSystem;
