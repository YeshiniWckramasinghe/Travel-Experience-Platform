const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async(req,res)=>{

const {name,email,password} = req.body;

const hashed = await bcrypt.hash(password,10);

const user = await User.create({
name,
email,
password:hashed
});

res.json(user);

};

exports.loginUser = async(req,res)=>{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user) return res.status(400).json("User not found");

const match = await bcrypt.compare(password,user.password);

if(!match) return res.status(400).json("Wrong password");

const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

res.json({token,user});

};