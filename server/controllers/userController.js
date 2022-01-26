const { createNewUser, findUserById,  findAllUsers, deleteUserById, moneyBalance, transfering } = require("../services/user");

const getAllUsers = async (req, res)=>{
  try{
    const user = await findAllUsers();
    // findAllUsers => users not user
    res.send(user)
    }catch(err){
      res.status(400).send(err.message);
    }
}
const getUser = async (req, res)=>{
  try{
  const {id} = req.params;
  const user = await findUserById(id);
  res.send(user)
  }catch(err){
    res.status(400).send(err.message);
  }
}
const addUser = async (req, res)=>{
  try{
    // const { something } = req.body
   const user = await createNewUser(req.body); 
   // req.body what is the body should I guess
   res.status(200).send(user);
  }catch(err){
   res.status(400).send(err.message);
  }
}
const deleteUser = async (req, res)=>{
  try{
    const { id } = req.params;
    const user = await deleteUserById(id);
    res.send(user)
    // send the status too
  }catch(err){
    res.status(400).send(err.message);
  }
}
const deposit = async (req, res)=>{
  try{
    const {id} = req.params;
    const {amount} = req.body;
    // greate that everything is on the top of function
    const user = await moneyBalance(id, amount, 1, "cash");
    res.send(user)
  }catch(err){
    res.status(400).send(err.message);
  }
}
const withdraw = async (req, res)=>{
  try{
    const {id} = req.params;
    const {amount} = req.body;
    const user = await moneyBalance(id, amount, -1, "cash");
    res.send(user)
  }catch(err){
    res.status(400).send(err.message);
  }
}

  const editUser = async (req, res)=>{
    try{
      const {id} = req.params;
      const {amount} = req.body;
      const user = await moneyBalance(id, amount, 1, "credit");
      res.send(user)
    }catch(err){
      res.status(400).send(err.message);
    }
  }


const transfer = async (req, res)=>{
  try{
    const {id} = req.params;
    const {amount, targetId} = req.body;
    const user = await transfering(id, amount,targetId);
    res.send(user)
  }catch(err){
    res.status(400).send(err.message);
  }
}





module.exports={
  getAllUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
  deposit,
  withdraw,
  transfer,
};