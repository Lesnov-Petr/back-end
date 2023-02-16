const express = require("express");
const authRouter = express.Router();
const { asyncWrapper } = require("../helpers/apiHelpers");
const {
  registerUsersController,
  loginUsersController,
} = require("../controllers/controllersAuth");
const { userRegistrationValidation } = require("../middleware/validations");

authRouter
  .post(
    "/singup",
    userRegistrationValidation,
    asyncWrapper(registerUsersController)
  )
  .post("/login", asyncWrapper(loginUsersController));

module.exports = { authRouter };
