const {
  searchProducts,
  addEatenProduct,
  getEatenProducts,
} = require("../services/serviceProducts");

const getListProductsController = async (req, res) => {
  const { query } = req.query;
  const products = await searchProducts(query);
  return products
    ? res.json({ products, status: 200 })
    : res.json({ message: "Cannot find", status: 400 });
};

const addEatenProductsController = async (req, res) => {
  const { title, calories, weight, date } = req.body;
  const savedProductID = await addEatenProduct(title, calories, weight, date);
  return res.json({ message: "success", savedProductID });
};

const getEatenProductsController = async (req, res) => {
  const { query } = req.query;
  const eatenProducts = await getEatenProducts(query);
  return res.json({ eatenProducts });
};

module.exports = {
  getListProductsController,
  addEatenProductsController,
  getEatenProductsController,
};
