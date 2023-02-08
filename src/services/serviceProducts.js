const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;
const { Products } = require("../db/Products/dbProducts");
const { EatenProducts } = require("../db/Products/dbEatenProducts");

const searchProducts = async (query) => {
  const allProducts = await Products.find({});
  const normolizeQuery = query.trim().toLowerCase().split(" "); //example ["гречка", "зеленый"]
  const listProducts = allProducts.filter((product) => {
    const normolizeTitleProducts = product.title.ru.toLowerCase().split(" ");
    let coincidences = true;
    normolizeQuery.forEach(
      (product) => (coincidences = normolizeTitleProducts.includes(product))
    );
    return coincidences;
  });

  return listProducts;
};

const addEatenProduct = async (title, calories, weight, date) => {
  const _id = new ObjectID();
  const searchList = await EatenProducts.find({});
  if (!searchList) {
    const newEatenProductList = new EatenProducts({
      eatenProducts: [{ _id, title, calories, weight, date }],
    });
    await newEatenProductList.save();
  }
  await EatenProducts.findOneAndUpdate({
    $push: { eatenProducts: { _id, title, calories, weight, date } },
  });

  return _id;
};

const getEatenProducts = async (query) => {
  const getEatenProduct = await EatenProducts.find({});
  const getEatenProductsByDate = getEatenProduct.map(({ eatenProducts }) =>
    eatenProducts.filter((product) => product.date === query)
  );

  return getEatenProductsByDate;
};

module.exports = { searchProducts, addEatenProduct, getEatenProducts };
