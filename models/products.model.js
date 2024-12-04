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

module.exports = {
    getAllProducts,
    getProduct,
    getProductsInCategory
};
