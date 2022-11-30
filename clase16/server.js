const express = require("express");
const app = express();
//httpServer
const httpServer = require("http").createServer(app);
//io
const io = require("socket.io")(httpServer);
//controllers e instancias
const Products = require("./controllers/productController");
const productController = new Products();
const Messages = require("./controllers/msgController");
const msgController = new Messages();
//moment.js
const moment = require("moment");
const timestamp = moment().format("h:mm a");
httpServer.listen(process.env.PORT || 8080, () =>
    console.log(`http://localhost:${process.env.PORT || 8080}`)
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname });
});

io.on("connection", async (socket) => {
    console.log(`Someone has joined🟢`);
    socket.on("productsData", async (data) => {
        await productController.save(data);
        io.emit("product-list", await productController.getAll());
    });

    //recieve msg data
    socket.on("msg", async (data) => {
        await msgController.save({
            socketId: socket.id,
            timestamp: timestamp,
            ...data,
        });
        io.emit("msg-list", await msgController.getAll());
    });
});
