"use strict";
const model = require("../models/carts.model");

function getCart(req, res, next)
{
    try {
        let productList = model.getCartProducts(req.params.user);
        res.render("cart", { productList: productList });
    } catch (err) {
        console.error("Error while getting all products ", err.message);
        next(err);
    }
}

function addProductToCart(req, res, next) {
    try {
        model.addToCart(req.params.user, req.params.product, 1);
        res.redirect("/onlyfans/cart/" + req.params.user);

    } catch (err) {
        console.error("Error while getting product ", err.message);
        next(err);
    }
}

function deleteCartProduct(req,res,next){
    try {
        model.removeCartProduct(req.params.cart_product);
        res.redirect("/onlyfans/cart/" + req.params.user);

    } catch (err) {
        console.error("Error while getting product ", err.message);
        next(err);
    }
}

function clearCart(req,res, next){
    try {
        model.clearCart(req.params.user);
        res.redirect("/onlyfans/cart/" + req.params.user);

    } catch (err) {
        console.error("Error while getting product ", err.message);
        next(err);
    }
}

module.exports = {
    getCart,
    addProductToCart,
    deleteCartProduct,
    clearCart
};
