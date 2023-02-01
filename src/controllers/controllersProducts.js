const { searchProducts } = require("../services/serviceProducts");

const getListProductsController = async (req, res) => {
  const { query } = req.query;
  const products = await searchProducts(query);
  return products
    ? res.json({ products, status: 200 })
    : res.json({ message: "Cannot find", status: 400 });
};

module.exports = { getListProductsController };
