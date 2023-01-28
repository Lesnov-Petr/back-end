const express = require("express");
const schema = require("../validation/validProducts");
const porductsRouter = express.Router();
const collection = require("../db/Products/dbProducts");

porductsRouter
  .get("/", (req, res) => {
    return res.json({ db });
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Prodicts.findOne({
      _id: "5d51694802b2373622ff55d3",
      id,
    });
    console.log(product);
    return res.json({ product });
  })
  .post("/", (req, res) => {
    const newProduct = schema.module.validate({
      id: 4,
      categories: "gibon",
      weight: 100,
      title: "Яйцо куриное (желток сухой)",
      calories: 623,
    });

    if (newProduct.error) {
      return res.json({ message: newProduct.error });
    }
    db.push(newProduct);
    res.json({ message: "newProduct", db });
  })
  .delete("/:id", (req, res) => {
    const { id } = req.params;
    db = db.filter(({ _id }) => id !== _id);
    return res.json({ message: `product with id ${id} delet` });
  });

module.exports = { porductsRouter };
