const mongoose = require("mongoose");

const schemaEatenProducts = new mongoose.Schema({
  owner: {
    type: String,
    require: [true, "Provide user id"],
    unique: true,
  },
  eatenProducts: [
    {
      title: {
        type: String,
        require: [true, "Set title for product"],
      },
      calories: {
        type: Number,
        require: [true, "Set calories for the amount of eaten product"],
      },
      weight: {
        type: Number,
        require: [true, "Set weight of eaten"],
      },
      date: {
        type: String,
        require: [true, ["Set date of eaten"]],
      },
    },
  ],
});

const EatenProducts = mongoose.model("EatenProducts", schemaEatenProducts);

module.exports = { EatenProducts };
