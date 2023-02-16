const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { connectMongo } = require("./src/db/connectDB");
const { errorHandler } = require("./src/helpers/apiHelpers");
const { porductsRouter } = require("./src/routers/productsRouter");
const { authRouter } = require("./src/routers/authRouter");

const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/api/users", authRouter);
app.use("/api/products", porductsRouter);
app.use(errorHandler);

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
