const { options } = require("../options/mysql");
const knex = require("knex")(options);

knex.schema
    .createTable("products", (table) => {
        table.increments("id"),
            table.string("title"),
            table.integer("price"),
            table.string("thumbnail");
    })
    .then(() => {
        console.log("The table was created successfully 🟢");
    })
    .catch((err) => {
        console.log(err);
        throw new Error(err);
    })
    .finally(() => {
        knex.destroy();
    });
