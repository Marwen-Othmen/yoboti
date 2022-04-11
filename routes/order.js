const express = require("express");

const { verifyToken, verifyTokenAndAuthorizatiion, verifyTokenAndAdmin } = require("./verifyToken");
const { addOrder, updateOrder, deleteOrder, getOrderById, getAllOrders, getOrdersStats, } = require("../controllers/order.controller");


const Router = express.Router();

// //  http://localhost:6000/orders/addOrder
// // Creat 

Router.post("/addOrder",verifyToken, addOrder);


// // // //  http://localhost:6000/order/updateOrder/:userid
// // // // update 

Router.put("/updateOrder/:id",verifyTokenAndAdmin, updateOrder);

// // // //  http://localhost:6000/order/deleteCart/:userid
// // // // delete 

Router.delete("/deleteOrder/:id", verifyTokenAndAdmin , deleteOrder);

// // // //  http://localhost:6000/order/userid
// // // // get Order by id

Router.get("/find/:userId",verifyTokenAndAuthorizatiion, getOrderById);

// // // //  http://localhost:6000/product/Orders
// // // //getAllOrders

Router.get("/ALLOrders",verifyTokenAndAdmin, getAllOrders);

// // Get User Stats
//  http://localhost:6000/orders/income no

Router.get("/income",verifyTokenAndAdmin ,getOrdersStats)







module.exports = Router;

