import { promises as fs } from "fs";

class ContainerFileSystem {
    constructor(path) {
        this.path = path;
    }

    // async getAll() {
    //     try {
    //         const objs = await fs.readFile(this.path, "utf-8");
    //         const res = await JSON.parse(objs);

    //         return res;
    //     } catch (error) {
    //         return [];
    //     }
    // }

    // async getById(id) {
    //     const objs = await this.getAll();
    //     const found = objs.find((o) => o.id == id);

    //     if (found) {
    //         return found;
    //     }

    //     return { error: "No encontrado" };
    // }

    // async save(obj) {
    //     console.log("entre");
    //     try {
    //         const objs = await this.getAll();
    //         let id;

    //         if (!objs || !objs.length) {
    //             id = 1;
    //         } else {
    //             objs.forEach((o) => {
    //                 id = o.id;
    //             });

    //             id = id + 1;
    //         }

    //         const save =
    //             objs && objs.length
    //                 ? [...objs, { ...obj, id }]
    //                 : [{ ...obj, id }];

    //         await fs.writeFile(this.path, JSON.stringify(save), {
    //             encoding: "utf-8",
    //         });
    //         return "Guardado con exito!";
    //     } catch (error) {
    //         console.log({ error });
    //         return { error };
    //     }
    // }

    // async update(obj) {
    //     try {
    //         const objs = await this.getAll();
    //         const obj = await this.getById(obj.id);

    //         if (obj) {
    //             const newObjt = [...objs, obj];
    //             await fs.writeFile(this.path, JSON.stringify(newObjt), {
    //                 encoding: "utf-8",
    //             });
    //             return "Guardado con exito!";
    //         } else {
    //             throw new Error("No encontramos un item con ese id");
    //         }
    //     } catch (error) {
    //         return { error };
    //     }
    // }

    // async deleteById(id) {
    //     try {
    //         const objs = await this.getAll();
    //         const obj = await this.getById(id);

    //         if (!objs || !objs.length || !obj) {
    //             return { error: "No encontramos lo que desea borrar" };
    //         }

    //         const newObjs = objs.filter((o) => o.id != id);

    //         await fs.writeFile(this.path, newObjs, { encoding: "utf-8" });

    //         return "Borrado con exito";
    //     } catch (error) {
    //         return { error };
    //     }
    // }
    // deleteAll = async () => {
    //     try {
    //         await fs.writeFile(this.path, JSON.stringify([], null));
    //         console.log("se borraron todos los productos");
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    getAll = async () => {
        try {
            const archivo = await fs.readFile(this.path, "utf-8");
            const productos = JSON.parse(archivo);
            return productos;
        } catch (e) {
            console.log(e);
        }
    };
    save = async (producto) => {
        try {
            const productos = await this.getAll();
            const id =
                productos.length === 0
                    ? 1
                    : productos[productos.length - 1].id + 1;
            producto.id = id;
            productos.push(producto);
            await fs.writeFile(this.path, JSON.stringify(productos, null));
            return producto.id;
        } catch (e) {}
    };
    getById = async (id) => {
        try {
            const productos = await this.getAll();
            const productoEncontrado = productos.find(
                (producto) => producto.id == id
            );

            if (!productoEncontrado)
                return console.log("El id del pruducto no existe");

            return productoEncontrado;
        } catch (e) {
            console.log(e);
        }
    };

    async deleteById(id) {
        try {
            const productos = await this.getAll();
            const productoEncontrado = productos.find((e) => e.id == id);
            if (!productoEncontrado) return console.log("el id no existe");
            const productosFiltrados = productos.filter((e) => e.id != id);
            await fs.writeFile(
                this.path,
                JSON.stringify(productosFiltrados, null)
            );
            console.log("producto borrado");
        } catch (e) {
            console.log(e);
        }
    }
    deleteAll = async () => {
        try {
            await fs.writeFile(this.path, JSON.stringify([], null));
            console.log("se borraron todos los productos");
        } catch (e) {
            console.log(e);
        }
    };

    updateById = async (id, title, price, description, stock, thumbnail) => {
        try {
            const productos = await this.getAll();
            const item = productos.find((prod) => prod.id === Number(id));
            if (item) {
                item.title = title;
                item.price = price;
                item.description = description;
                item.stock = stock;
                item.thumbnail = thumbnail;
                item.timestamp = new Date().toLocaleString();
                console.log(item);
                await fs.writeFile(
                    this.path,
                    JSON.stringify(productos, null, 2)
                );
                return item;
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    async updateCartById(id, timestamp, products) {
        try {
            const productos = await this.getAll();
            const isInProductList = productos.find(
                (prod) => Number(prod.id) === Number(id)
            );
            const indexItem = productos.findIndex(
                (prod) => Number(prod.id) === Number(id)
            );
            if (isInProductList != undefined) {
                const objeto = {
                    id: id,
                    timestamp: timestamp,
                    products: products,
                };
                productos[indexItem] = objeto;
                fs.writeFile(this.path, JSON.stringify(productos, null));
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default ContainerFileSystem;
