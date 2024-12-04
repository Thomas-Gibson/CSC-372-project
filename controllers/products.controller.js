"use strict";
const model = require("../models/products.model");
//const { getAllProducts } = require("../models/product.model");

function getAllProducts(req, res, next) {
    try {
        let productList = model.getAllProducts();
        res.render("products", {productList : productList})
    } catch (err) {
        console.error("Error while getting all products ", err.message);
        next(err); // next is not a function error?
    }
}

function getProduct(req, res, next) {
    try {
        let product = model.getProduct(req.params.id);
        res.render("details",{product : product});
    } catch (err) {
        console.err("Error while getting product ", err.message);
        next(err);
    }
}

function getProductsInCategory(req, res,next) {
    try {
        let productList = model.getProductsInCategory(req.params.id);
        res.render("products", { productList: productList });
    } catch (err) {
        console.err("Error while getting product ", err.message);
        next(err);
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    getProductsInCategory
};
