import ContainerFileSystem from "../../container/ContainerFileSystem.js";

class ProductsDaoFileSystem extends ContainerFileSystem {
    constructor() {
        super("src/db/products.json");
    }
}
export default ProductsDaoFileSystem;
