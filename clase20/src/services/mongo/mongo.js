import { connect } from "mongoose";
import { config } from "dotenv";
config();
export default function connectMG() {
    try {
        connect(
            `mongodb+srv://${process.env.MONGO_USER}:${MONGO_PASS}@cluster0.tpr2wep.mongodb.net/?retryWrites=true&w=majority`,
            { useNewUrlParser: true }
        );
    } catch (e) {
        console.log(e);
        throw "can not connect to the db";
    }
}
