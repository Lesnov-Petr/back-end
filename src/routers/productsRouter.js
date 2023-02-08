const express = require("express");
const porductsRouter = express.Router();
const { asyncWrapper } = require("../helpers/apiHelpers");
const {
  getListProductsController,
  getEatenProductsController,
  addEatenProductsController,
} = require("../controllers/controllersProducts");

porductsRouter
  .get("/", asyncWrapper(getListProductsController))
  .get("/eaten", asyncWrapper(getEatenProductsController))
  .post("/eaten", asyncWrapper(addEatenProductsController));

module.exports = { porductsRouter };
