"use strict";
const db = require("./db-conn");

function getAllCategories() {
    

    let query = "SELECT * FROM categories;";
    const data = db.all(query);
    return data;
}

module.exports = {
    getAllCategories
};
