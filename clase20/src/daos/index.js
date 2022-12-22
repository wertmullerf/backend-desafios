import ProductsDaoFileSystem from "./products/ProductsDaoFileSystem.js";
import CartDaoFileSystem from "./carts/CartDaoFileSystem.js";
import ProductDaoMongo from "./products/ProductDaoMongo.js";
import CartDaoMongo from "./carts/CartDaoMongo.js";
// import CartDaoMemory from "./carts/CartDaoMemory.js";
// import ProductDaoMemory from "./products/ProductDaoMemory.js";
import { config } from "dotenv";
import connectMG from "../services/mongo/mongo.js";
config();
// const instancias = [
//     {
//         name: ProductsDaoFileSystem,
//         id: "file",
//         desc: "product",
//     },
//     {
//         name: CartDaoFileSystem,
//         id: "file",
//         desc: "cart",
//     },
//     {
//         name: ProductDaoMongo,
//         id: "mongo",
//         desc: "product",
//     },
//     {
//         name: CartDaoMongo,
//         id: "mongo",
//         desc: "cart",
//     },
//     {
//         name: ProductDaoMemory,
//         id: "memory",
//         desc: "product",
//     },
//     {
//         name: CartDaoMemory,
//         id: "memory",
//         desc: "cart",
//     },
// ];
// const instancia = instancias.filter((i) => i.id == process.env.INSTANCIA);

// const resultado = {
//     [instancia[0].desc]: instancia[0].name,
//     [instancia[1].desc]: instancia[1].name,
// };
// export default resultado;

const dbSelected = () => {
    switch (process.env.INSTANCIA) {
        case "file": {
            return {
                ProductDao: new ProductsDaoFileSystem(),
                CartDao: new CartDaoFileSystem(),
            };
        }
        case "mongo": {
            connectMG();
            return {
                ProductDao: new ProductDaoMongo(),
                CartDao: new CartDaoMongo(),
            };
        }
    }
};
const { ProductDao, CartDao } = dbSelected();
export { ProductDao, CartDao };
