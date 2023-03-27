const {
  searchProducts,
  addEatenProduct,
  getEatenProducts,
  deleteEatenProducts,
} = require("../services/serviceProducts");

const getListProductsController = async (req, res) => {
  const { query } = req.query;
  if (!query) {
    throw new QueryError("Provide a query string");
  }

  const products = await searchProducts(query);
  return res.json({ status: 200, products });
};

const addEatenProductsController = async (req, res) => {
  const ownerId = req.user._id;
  const { title, calories, weight, date } = req.body;
  const savedProductID = await addEatenProduct(
    title,
    calories,
    weight,
    date,
    ownerId
  );
  return res.json({ message: "success", savedProductID });
};

const getEatenProductsController = async (req, res) => {
  const { _id } = req.user;
  const { query } = req.query;
  const eatenProducts = await getEatenProducts(query, _id);
  return res.json({ eatenProducts });
};

const deleteEatenProductsController = async (req, res) => {
  const { id } = req.params;
  const ownerId = req.user._id;
  await deleteEatenProducts(id, ownerId);
  return res.json({ message: `Продукт с id ${id} был удален` });
};

module.exports = {
  getListProductsController,
  addEatenProductsController,
  getEatenProductsController,
  deleteEatenProductsController,
};
