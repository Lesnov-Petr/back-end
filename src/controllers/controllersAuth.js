const { registerUsers, loginUsers } = require("../services/serviceAuth");

const registerUsersController = async (req, res) => {
  const { username, email, password } = req.body;
  await registerUsers(username, email, password);
  res.json({
    message: `New user registred ${username} `,
    status: "success",
  });
};

const loginUsersController = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginUsers(email, password);
  res.json({ status: 200, token });
};

module.exports = {
  registerUsersController,
  loginUsersController,
};
