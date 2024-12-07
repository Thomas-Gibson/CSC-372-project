"use strict";
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products.controller");
const categoryController = require("../controllers/categories.controller");
const cartsController = require("../controllers/carts.controller");

////http://localhost:3000/onlyfans/init
//router.get("/init", productsController.getAllProducts);

//http://localhost:3000/onlyfans
router.get("/:user?", categoryController.getAllCategories);

//http://localhost:3000/onlyfans/details/1
router.get("/details/:id/:user?", productsController.getProduct);

//http://localhost:3000/onlyfans/category/1
router.get("/category/:id",productsController.getProductsInCategory)

//http://localhost:3000/onlyfans/cart/1
router.get("/cart/:user", cartsController.getCart);

//http://localhost:3000/onlyfans/cart/add/2/2
router.get("/cart/add/:user/:product", cartsController.addProductToCart)

//http://localhost:3000/onlyfans/cart/delete/2/2
router.get("/cart/delete/:user/:cart_product", cartsController.deleteCartProduct)

//http://localhost:3000/onlyfans/cart/clear/2
router.get("/cart/clear/:user", cartsController.clearCart)

//http://localhost:3000/onlyfans/admin/list
router.get("/admin/list", productsController.getAllProducts)

//http://localhost:3000/onlyfans/admin/edit
router.get("/admin/edit/:product", productsController.getEditPage)

router.post("/admin/update_product/:id", productsController.updateProduct);

router.post("/admin/create_product", productsController.createProduct)

router.get("/admin/addproduct", productsController.getAddPage);

router.get("/admin/delete/:product", productsController.removeProduct);

module.exports = router;