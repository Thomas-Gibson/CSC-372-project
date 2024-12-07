"use strict";
const db = require("./db-conn");

function hasCart(userId)
{
    let query = "SELECT * FROM carts WHERE carts.user_id =?;";
    const data = db.all(query, userId);
    
    let result = data.length != 0;
    return result;
}

function createCart(userId)
{
    if(hasCart(userId)){
        console.log("User has cart");
        return;
    }
    console.log("user doesn't have cart");
    let query = "INSERT INTO Carts (user_id) VALUES (?);";
    
    db.run(query, userId);
    return;
}

function getCart(userId)
{
    createCart(userId);

    let query = "SELECT * FROM carts WHERE carts.user_id = ?;";
    const data = db.get(query, userId);
    return data;
}

function addToCart(userId, productId, quantity)
{
    const cart = getCart(userId);
    let query = "INSERT INTO CartProducts (cart_id, product_id, quantity) VALUES (?, ?, ?);"
    db.run(query, [cart.id, productId, quantity]);
}

function getCartProducts(userId)
{
    const cart = getCart(userId);
    let query = "SELECT Products.*, CartProducts.id FROM CartProducts JOIN Products JOIN Carts WHERE Carts.user_id = ? AND Carts.id = CartProducts.cart_id AND Products.id = product_id;";
    const data = db.all(query, userId);
    return data;
}

function removeCartProduct(cartProductId)
{
    let query = "DELETE FROM CartProducts WHERE id = ?";
    db.run(query, cartProductId);
}

function clearCart(userId)
{
    const cart = getCart(userId);
    let query = "DELETE FROM CartProducts WHERE cart_id = ?";
    db.run(query, cart.id);
}

module.exports = {
    hasCart,
    createCart,
    getCart,
    addToCart,
    getCartProducts,
    removeCartProduct,
    clearCart
};
