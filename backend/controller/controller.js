const asyncHandler = require("express-async-handler")
const User = require("../models/model.js");
const generateToken = require("../util/generateToken.js");


const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, password } = req.body;
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(404);
      throw new Error("User already exists");
    }
  
    const user = await User.create({
      fullName,
      email,
      password,
    
    });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password:user.password,
        token:generateToken(user._id),
       
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  });

  const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });
  
  

  const getAllUsers = asyncHandler(async (req, res) => {

    try{
      const user = await User.find();
      res.status(200).json({message: "User details are", data: user});
      //res.send(data);
      
  }catch(err){
      console.log(err);
  }
});
 

  module.exports= {registerUser, authUser, getAllUsers};