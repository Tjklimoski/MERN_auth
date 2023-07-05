import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// desc    Auth user and set token
// route   POST /api/users/auth
// access  Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// desc    Register new user
// route   POST /api/users
// access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //password here is still plain text, we'll have bcrypt hash the password in userModel.js before it's sent to the db.
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    //create JWT and set in cookie on res passed in as arg
    generateToken(res, user._id);
    //send back the created user
    //make sure to not send back the user's hashed password
    //not sending the JWT here, we're storing that in the cookie
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// desc    Logout user
// route   POST /api/users/logout
// access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

// desc    Get user profile
// route   GET /api/users/profile
// access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

// desc    Update user profile
// route   PUT /api/users/profile
// access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
