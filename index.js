const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
const {
  connectMongoProductsDB,
} = require("./src/db/Products/connectProductsDB");
const { porductsRouter } = require("./src/routers/productsRouter");
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan("tiny"));
app.use("/api/products", porductsRouter);

const start = async () => {
  await connectMongoProductsDB();
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Server work at port ${PORT}`);
  });
};

start();
