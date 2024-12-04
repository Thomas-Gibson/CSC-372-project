"use strict";
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products.controller");
const categoryController = require("../controllers/categories.controller")

//http://localhost:3000/onlyfans/init
router.get("/init", productsController.getAllProducts);

//http://localhost:3000/onlyfans
router.get("", categoryController.getAllCategories);

//http://localhost:3000/onlyfans/details/1
router.get("/details/:id", productsController.getProduct);

//http://localhost:3000/onlyfans/category/1
router.get("/category/:id",productsController.getProductsInCategory)

module.exports = router;