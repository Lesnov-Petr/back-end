const { MongoClient } = require("mongodb");
const collections = require("./dbProducts");

const connectMongoProductsDB = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  });
  const db = client.db();
  collections.Products = db.collection("products");
};

module.exports = { connectMongoProductsDB };
