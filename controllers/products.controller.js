"use strict";
const model = require("../models/products.model");

function getAllProducts(req, res, next) {
    try {
        let productList = model.getAllProducts();
        res.render("admin_products", {productList : productList})
    } catch (err) {
        console.error("Error while getting all products ", err.message);
        next(err);
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

function getEditPage(req, res, next) {
    try {
        let product = model.getProduct(req.params.product);
        res.render("admin-edit", {product : product});
    } catch (err) {
        console.error("Error while getting product ", err.message);
        next(err);
    }
}

function updateProduct(req, res, next) {
    const productId = req.params.id;
    const { name, description, category, image, price } = req.body;

    try {
        const updatedProduct = model.updateProduct(productId, {
            name,
            description,
            category_id: category, 
            image_url: image, 
            price
        });

        res.redirect('/onlyfans/admin/list');

    } catch (err) {
        console.error("Error updating product", err);
    }
}

function createProduct(req,res,next){
    const data = {...req.body};

    try{
        const newProduct = model.createProduct(data);
        res.redirect("/onlyfans/admin/list");
    }catch(err){
        console.error("Error creating product!");
    }
}

function getAddPage(req,res,next){
    try {
        res.render("admin_create", {});
    } catch (err) {
        console.error("Error while getting page ", err.message);
        next(err);
    }
}

function removeProduct(req, res,next){
    try{
        model.removeProduct(req.params.product);
        res.redirect("/onlyfans/admin/list");
    } catch(err){
        console.error("Error while removing product ", err.message);
        next(err);
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    getProductsInCategory,
    getEditPage,
    updateProduct,
    createProduct,
    getAddPage,
    removeProduct
};
