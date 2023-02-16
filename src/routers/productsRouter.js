const express = require("express");
const porductsRouter = express.Router();
const { asyncWrapper } = require("../helpers/apiHelpers");
const {
  getListProductsController,
  getEatenProductsController,
  addEatenProductsController,
  deleteEatenProductsController,
} = require("../controllers/controllersProducts");
const { addProductValidation } = require("../middleware/validations");
const { authMiddleware } = require("../middleware/authMiddleware");

porductsRouter
  .use(authMiddleware)
  .get("/", asyncWrapper(getListProductsController))
  .get("/eaten", asyncWrapper(getEatenProductsController))
  .post(
    "/eaten",
    addProductValidation,
    asyncWrapper(addEatenProductsController)
  )
  .delete("/eaten:id", asyncWrapper(deleteEatenProductsController));

module.exports = { porductsRouter };
