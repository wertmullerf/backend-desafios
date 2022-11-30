const { options } = require("../options/sqlite");
const knex = require("knex")(options);

knex.schema
    .createTable("messages", (table) => {
        table.increments("id"),
            table.string("socketid"),
            table.string("timestamp"),
            table.string("msg"),
            table.string("email");
    })
    .then(() => {
        console.log("La tabla se creo correctamente");
    })
    .catch((err) => {
        console.log(err);
        throw new Error(err);
    })
    .finally(() => {
        knex.destroy();
    });
