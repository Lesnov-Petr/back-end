const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schemaUsers = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

schemaUsers.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});
const User = mongoose.model("User", schemaUsers);

module.exports = { User };
