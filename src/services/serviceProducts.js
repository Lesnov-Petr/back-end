const { Products } = require("../db/Products/dbProducts");

const searchProducts = async (product) => {
  const allProducts = await Products.find({});
  const normolizeQuery = product.title.trim().toLowerCase().split(" "); //example ["гречка", "зеленый"]
  const listProducts = allProducts.filter((product) => {
    const normolizeTitleProducts = product.title.ru
      .trim()
      .toLowerCase()
      .split(" ");
    let coincidences = true;

    normolizeQuery.forEach(
      (product) => (coincidences = normolizeTitleProducts.includes(product))
    );
    return coincidences;
  });

  return listProducts;
};

module.exports = { searchProducts };
