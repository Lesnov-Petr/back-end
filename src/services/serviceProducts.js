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

const addEatenProduct = async (title, calories, weight, date, owner) => {
  const listEatenProductsByUser = await EatenProducts.findOne({ owner });
  const _id = new ObjectID();
  if (!listEatenProductsByUser) {
    const newEatenProductList = new EatenProducts({
      owner: owner,
      eatenProducts: [{ _id, title, calories, weight, date }],
    });
    await newEatenProductList.save();
    return _id;
  }

  await EatenProducts.findOneAndUpdate(
    { owner },
    { $push: { eatenProducts: { _id, title, calories, weight, date } } }
  );

  return _id;
};

const getEatenProducts = async (query, owner) => {
  const { eatenProducts } = await EatenProducts.findOne({ owner });

  const getEatenProductsByDate = eatenProducts.map((product) =>
    eatenProducts.filter((product) => product.date === query)
  );

  return getEatenProductsByDate;
};

const deleteEatenProducts = async (id, owner) => {
  await EatenProducts.updateOne(
    { owner },
    { $pull: { eatenProducts: { _id: id } } }
  );
};

module.exports = {
  searchProducts,
  addEatenProduct,
  getEatenProducts,
  deleteEatenProducts,
};
