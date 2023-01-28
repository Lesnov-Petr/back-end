const express = require("express");
const porductsRouter = express.Router();
const { asyncWrapper } = require("../helpers/apiHelpers");
const {
  getListProductsController,
} = require("../controllers/controllersProducts");

porductsRouter
  .get("/", asyncWrapper(getListProductsController))
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Prodicts.findOne({
      _id: "5d51694802b2373622ff55d3",
      id,
    });
    console.log(product);
    return res.json({ product });
  });

module.exports = { porductsRouter };
