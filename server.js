require("dotenv").config({ path: "./config/.env" });



const express = require("express");
const connectDB = require("./config/connectDB");


const product = require("./routes/product");
const user = require("./routes/user");
const auth = require("./routes/auth");
const cart = require("./routes/cart");
const order = require("./routes/order");



const app = express();
app.use(express.json());
connectDB();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}


app.use("/orders", order);
app.use("/cart", cart);
app.use("/auth", auth);
app.use("/product", product);
app.use("/users", user);


app.listen(process.env.PORT || 6000, () => {
  console.log("Server connection run");
});

