const { getListProducts } = require("../services/serviceProducts");

const getListProductsController = async (req, res) => {
  console.log("log");
  const products = await getListProducts();
  return products
    ? res.json({ products, status: 200 })
    : res.json({ message: "Cannot find", status: 400 });
};

module.exports = { getListProductsController };
