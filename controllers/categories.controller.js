"use strict";
const model = require("../models/categories.model");

function getAllCategories(req, res, next) {
    try {
        let categoryList = model.getAllCategories();
        res.render("home", { categoryList: categoryList })
    } catch (err) {
        console.error("Error while getting all products ", err.message);
        next(err); // next is not a function error?
    }
}

module.exports = {
    getAllCategories
};
