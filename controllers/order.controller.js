const Order = require("../models/Order");




// /***************************** addOrder route callback function ******************ok */

exports.addOrder = async (req, res) => {
  const newOrder = await new Order(req.body);

  try { 
      const savedOrder = await newOrder.save();

    res.status(203).json({ msg: "Order added successfully", savedOrder});
  } catch (error) {
    res.status(403).json({ errors: [{ msg: "Add Order failed" }] });
  }
};

// /***************************** deleteCart route callback function ******************no */


exports.deleteOrder = async (req, res) => {
  try {
      await Order.findByIdAndDelete(req.params.id);

      res.status(203).json({ msg: "Order deleted with success" });
  } catch (error) {
 
    res.status(402).json({ errors: [{ msg: "Delete Order failed" }] });
  }
};

// // /***************************** getOrderById route callback function ****************** */

exports.getOrderById = async (req, res) => {
    try {
      const orders = await Order.find({userId:req.params.userId});
      res.status(200).json({ msg: "Fetch Order  with success", orders });
    } catch (error) {
  
      res.status(400).json({ msg: "Fetch Order failed" });
    }
  };


// /***************************** getAllOrders route callback function ****************** ok */

exports.getAllOrders = async (req, res) => {
   
    try {
      const orders = await Order.find();
      res.status(200).json({ msg: "Fetch ALL Order with  success", orders});
    } catch (error) {
      res.status(401).json({ errors: [{ msg: "Fetch ALL Order  failed" }] });
    }
  };
  

// /***************************** Update cart route callback function ******************no */

exports.updateOrder = async (req, res) => {

  try {
     const updateOrder = await Order.findByIdAndUpdate(req.params.id,{
       $set:req.body,
     },
        {new:true}
      );

      res.status(203).json({ msg: "Order updeted with success" ,updateOrder });

  } catch (error) {
    console.log(error);
    res.status(402).json({ errors: [{ msg: "Update Order failed" }] });
  }
};

  

// /***************************** getOrderStats route callback function ************/

exports.getOrdersStats = async (req, res) => {
            
  const date= new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() -1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1));
try{ 
  const income = await Order.aggregate([
     {$match :  {createdAt : { $gte : previousMonth} }},

     { $project :{ month: {$month : "$createdAt" },
     sales:"$amount",
    }, 
  },
     { 
         $group:{
          _id:"$month",
          total:{$sum: "$sales"},
      }}

  ]);
 res.status(200).json(income); 

} catch (error) {
 res.status(400).json(err);
}
};



