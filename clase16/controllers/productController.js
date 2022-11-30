const { options } = require("../options/mysql");
const knex = require("knex")(options);

class productController {
    async getAll() {
        try {
            const productsList = await knex("products").select("*");
            if (productsList.length > 0) {
                return productsList;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    async save(obj) {
        try {
            await knex("products").insert(obj);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = productController;
