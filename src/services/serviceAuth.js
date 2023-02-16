const bcrypt = require("bcrypt");
const jwb = require("jsonwebtoken");

const { User } = require("../db/Auth/dbAuth");
const { NotAuthorizedError } = require("../helpers/errors");

const registerUsers = async (username, email, password) => {
  const user = new User({
    username,
    email,
    password,
  });
  await user.save();
};

const loginUsers = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new NotAuthorizedError("wrong login or password");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError("wrong login or password");
  }

  const token = jwb.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET
  );

  return token;
};

module.exports = { registerUsers, loginUsers };
