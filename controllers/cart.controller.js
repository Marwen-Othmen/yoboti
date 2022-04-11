const Cart = require("../models/Cart");
const User = require("../models/User");




// /***************************** addCart route callback function ******************ok */


exports.addCart = async (req, res) => {
    const newCart = await new Cart(req.body);
  
    try { 
        const savedCart = await newCart.save();
  
      res.status(203).json({ msg: "Cart added successfully", savedCart});
    } catch (error) {
      res.status(403).json({ errors: [{ msg: "Add Cart failed" }] });
    }
  };

// /***************************** deleteCart route callback function ******************ok */

exports.deleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
  
        res.status(203).json({ msg: "Cart deleted with success" });
    } catch (error) {
   
      res.status(402).json({ errors: [{ msg: "Delete Cart failed" }] });
    }
  };

// /***************************** getCartById route callback function ****************** */

exports.getCartById = async (req, res) => {
    try {
      const cart = await Cart.findOne({userId:req.params.userId});
      res.status(200).json({ msg: "Fetch cart with success", cart });
    } catch (error) {
  
      res.status(400).json({ msg: "Fetch cart failed" });
    }
  };


// /***************************** getAllCart route callback function ****************** ok */

exports.getAllCarts = async (req, res) => {
   
    try {
      const allCart= await Cart.find();
      res.status(200).json({ msg: "Fetch Carts with success", allCart});
    } catch (error) {
      res.status(401).json({ errors: [{ msg: "Fetch Cart failed" }] });
    }
  };
  

// /***************************** Update cart route callback function ******************no */

exports.updateCart = async (req, res) => {

    try {
       const updateCart = await Cart.findByIdAndUpdate(req.params.id,{
         $set:req.body,
       },
          {new:true}
        );
  
        res.status(203).json({ msg: "Cart updeted with success" ,updateCart });
  
    } catch (error) {
      console.log(error);
      res.status(402).json({ errors: [{ msg: "Update Cart failed" }] });
    }
  };
  

