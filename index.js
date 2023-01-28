const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
const { connectMongo } = require("./db/Products/connectProductsDB");
const { porductsRouter } = require("./routers/productsRouter");
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan("tiny"));
app.use("/api/products", porductsRouter);
app.use("/products", (req, res) => {
  return res.json({ message: "products" });
});

const start = async () => {
  await connectMongo();
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Server work at port ${PORT}`);
  });
};

start();
