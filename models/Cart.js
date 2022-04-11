const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"},
  products:[{
    productId:{type:String, },
    quantity:{type:Number,defaulte:1},
},

  ],
 
},
{ timestamps:true}
);

module.exports = mongoose.model("Cart", cartSchema);
