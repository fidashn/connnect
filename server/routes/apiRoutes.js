const express =require("express");

const {
  getUser,
  addUser,
  editUser,
  deleteUser,
  getAllUsers,
  deposit,
  withdraw,
  transfer,
} = require("../controllers/userController");

const apiRouter = express.Router();

apiRouter.get("/users", getAllUsers);

apiRouter.get("/users/:id", getUser);

// todo: adding users
apiRouter.post("/users", addUser);

// todo: editing user data
apiRouter.put("/users/credit/:id", editUser);

// todo: delete user
apiRouter.delete("/users/:id", deleteUser);

apiRouter.put("/users/deposit/:id", deposit);

apiRouter.put("/users/withdraw/:id", withdraw);

apiRouter.put("/users/transfer/:id", transfer);

// export default apiRouter;
module.exports = apiRouter;




