import mongoose from "mongoose";
// async function connectMG() {
//     try {
//         await mongoose.connect(
//             "mongodb+srv://facundow:Vcc3LL4x3CdtfyCV@cluster0.tpr2wep.mongodb.net/?retryWrites=true&w=majority",
//             { useNewUrlParser: true }
//         );
//     } catch (e) {
//         console.log(e);
//         throw "can not connect to the db";
//     }
// }
class ContainerMongo {
    constructor({ name, schema }) {
        this.model = mongoose.model(name, schema);
    }

    async getAll() {
        const response = await this.model.find();
        return response;
    }

    async save(element) {
        const response = await this.model.create(element);
        return response;
    }

    async getById(id) {
        const response = await this.model.findById(id);
        return response;
    }

    async updateById(id, newData) {
        const response = await this.model.findByIdAndUpdate(id, newData, {
            new: true,
        });
        return response;
    }

    async deleteById(id) {
        const response = await this.collection.findByIdAndDelete(id);
        return response;
    }
}

export default ContainerMongo;
