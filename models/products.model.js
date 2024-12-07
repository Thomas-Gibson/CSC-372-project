"use strict";
const db = require("./db-conn");

function getAllProducts() {
    let query = "SELECT * FROM products;";
    const data = db.all(query);
    return data;
}

function getProduct(id) {
    let query = "SELECT * FROM products WHERE products.id =?"
    const data = db.get(query, id);
    return data;
}

function getProductsInCategory(id) {
    let query = "SELECT * FROM products WHERE Products.category_id =?"
    const data = db.all(query, id);
    return data;
}

function updateProduct(id, data) {
    let query = "UPDATE products SET name = ?, price = ?, description = ?, image_url = ?, category_id = ? WHERE id = ?";  // Adjust columns here
    return db.run(query, [data.name, data.price, data.description, data.image_url, data.category_id, id]);
}

function createProduct(data) {

    const query = "INSERT INTO products (name, description, category_id, image_url, price) VALUES (?, ?, ?, ?, ?);";
    db.run(query, [data.name, data.description, data.category, data.image, data.price]);

    return;
}

function removeProduct(id) {
    const query = "DELETE FROM products WHERE id = ?";
    db.run(query, id);
    return;
}

module.exports = {
    getAllProducts,
    getProduct,
    getProductsInCategory,
    updateProduct,
    createProduct,
    removeProduct
};
