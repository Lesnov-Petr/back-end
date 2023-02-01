const { searchProducts } = require("../services/serviceProducts");

const getListProductsController = async (req, res) => {
  const product = req.body;
  const products = await searchProducts(product);
  return products
    ? res.json({ products, status: 200 })
    : res.json({ message: "Cannot find", status: 400 });
};

module.exports = { getListProductsController };
