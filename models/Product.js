const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    Title: String,
    categories: { type: Array },
    Model: String,
    price: { type : Number, required: true },
    Description: String,
    image: { type: String },

    dateOfCreactionProduct: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
