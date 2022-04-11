const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {type:String,required: true },
  products:[{
    productId:{type:String, },
    quantity:{type:Number,defaulte:1},
},

  ],
 
amount: {type: Number, required:true },
adress: {type: Object, required:true },
status: {type: String, defaulte:"pending" },


},
{ timestamps:true}
);

module.exports = mongoose.model("order", orderSchema);
