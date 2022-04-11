const express = require("express");

const { verifyToken, verifyTokenAndAuthorizatiion, verifyTokenAndAdmin } = require("./verifyToken");
const {  addCart, updateCart, deleteCart, getCartById,  getAllCarts   } = require("../controllers/cart.controller");


const Router = express.Router();

// //  http://localhost:6000/cart/addCart
// // Creat product

Router.post("/addCart",verifyToken, addCart);


// // // //  http://localhost:6000/cart/updateCart/:userid
// // // // update Cart
Router.put("/updateCart/:id",verifyTokenAndAuthorizatiion, updateCart);

// // // //  http://localhost:9000/cart/deleteCart/:userid
// // // // delete Cart

Router.delete("/deleteCart/id", verifyTokenAndAuthorizatiion , deleteCart);

// // // //  http://localhost:9000/cart/userid
// // // // get Cart by id

Router.get("/find/:userId",verifyTokenAndAuthorizatiion, getCartById);

// // // //  http://localhost:9000/product/products
// // // //getAllCart

Router.get("/",verifyTokenAndAdmin, getAllCarts);









module.exports = Router;

