class Product {
    constructor(title, price, description, stock, thumbnail) {
        this.title = title || undefined;
        this.price = price || undefined;
        this.description = description || undefined;
        this.stock = stock || undefined;
        this.thumbnail = thumbnail || undefined;
        this.timestamp = new Date().toLocaleString();
    }
}

module.exports = Product;
