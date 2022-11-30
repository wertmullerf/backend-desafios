const { options } = require("../options/sqlite");
const knex = require("knex")(options);

class msgController {
    async getAll() {
        try {
            const chat = await knex("messages").select("*");
            if (chat.length > 0) {
                return chat;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    async save(obj) {
        try {
            await knex("messages").insert(obj);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = msgController;
