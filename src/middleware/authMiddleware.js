const { NotAuthorizedError } = require("../helpers/errors");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const [typeToken, token] = req.headers["authorization"].split(" ");

  if (!token) {
    next(new NotAuthorizedError("Please, provide a token"));
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    next(new NotAuthorizedError("Invalid token"));
  }
};

module.exports = { authMiddleware };
