const express = require("express");

const { loginUser } = require("../CONTROLLER/user.login"); 
const {registerController}=require("../CONTROLLER/user.register")
const {userGet}=require("../CONTROLLER/user.get")

const userRouter = express.Router();

userRouter.post("/register", registerController);

userRouter.post("/login", loginUser); 

userRouter.get("/getRegister", userGet)

module.exports = {
  userRouter
};
