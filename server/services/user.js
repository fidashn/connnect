const User = require("../model/user");

const ifExists = async (id) => await User.exists({id:id});

const findUserById = async (id) => await User.findOne({id:id});

const findAllUsers = async () => await User.find();


const createNewUser = async (user) =>{
// to do: check if user already exists
if (await  ifExists(user.id)) {
throw Error ("user already exists!");
}
const newUser = new User(user);
await newUser.save();
return newUser;
}

const deleteUserById = async (id)=>{
  await User.deleteOne({id:id});
  if (await  ifExists(id)) {
    throw Error ("oops! try again please.");
    }else{
      return ("deleted.");
    }
}

const moneyBalance = async(id, amount, num, str) => {
if (await  !ifExists(id)) {
    throw Error ("oops! try again please.");
    }
let user =  await findUserById(id);
if (user.cash < amount && num == -1){
  throw Error ("You don't have enough money!");
}
let updatedUser;
if (str === "cash")
updatedUser = await User.findOneAndUpdate({id:id}, {$inc:{cash:amount*num}}, {new:true});
if (str === "credit")
updatedUser = await User.findOneAndUpdate({id:id}, {$inc:{credit:amount}}, {new:true});
return updatedUser;
}

const transfering= async (id,amount,targetId) =>{
  if (await  !ifExists(id)&&!ifExists(targetId)) {
    throw Error ("Id Is Not Found!");
    }
  let user =  await findUserById(id);
  if(user.cash + user.credit < amount){
    throw new Error("You don't have enough money!");
  }
  let amountFromCash = Math.min(amount, user.cash);
  let amountFromCredit = Math.min(amount-amountFromCash, user.credit);
  const updateFirstUser = await User.findOneAndUpdate({id:id}, {$inc:{cash:-1*amountFromCash, credit:-1*amountFromCredit}}, {new:true});
  const updateSecondUser = await User.findOneAndUpdate({id:targetId}, {$inc:{cash:amount}}, {new:true});
  return [updateFirstUser, updateSecondUser];
}



module.exports={
  createNewUser,
  findUserById,
  findAllUsers,
  deleteUserById, 
  moneyBalance,
  transfering
};