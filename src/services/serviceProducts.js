const { Products } = require("../db/Products/dbProducts");

const getListProducts = () => {
  const products = Products.find({});
  return products;
};

module.exports = { getListProducts };
