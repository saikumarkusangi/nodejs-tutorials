const asyncHandler = require('express-async-handler')
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
//@desc Register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req,res)=>{
    const {username,phone,password,address} = req.body;
    if(!username || !password || !phone || !address){
        res.status(400);
        throw new Error('All fields are mandatory');
    }
    const userAvilable = await User.findOne({username});
    if(userAvilable){
        res.status(400);
        throw new Error('username already registered');
    }
    const hasedpassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        phone,
        password:hasedpassword,
        address
    });
    if(user){
        res.status(201).json({_id:user.id,username:user.username})
    }else{
        res.status(400);
        throw new Error('User data not valid')
    }

});

//@desc Login a user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"login  user"})
});



//@desc Current user info
//@route POST /api/users/login
//@access private

const currentUser = asyncHandler(async (req,res)=>{
    res.json({message:"current user"})
});



//@desc Delete user 
//@route POST /api/users/login
//@access private






module.exports = {
    registerUser,
    loginUser,
    currentUser
}