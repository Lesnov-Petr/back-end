const { CastomsError } = require("../helpers/errors");

const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (error, req, res, next) => {
  if (error instanceof CastomsError) {
    return res
      .status(error.status)
      .json({ message: error.message, query: req.query });
  }
  res.status(500).json({ message: error.message });
};

module.exports = {
  asyncWrapper,
  errorHandler,
};
