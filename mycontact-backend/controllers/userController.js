 const asyncHandler = require("express-async-handler");
 //@desc Regsiter a user
//@route POST /api/users/Register
//@access public
const registerUser = asyncHandler(async (req,res) =>{
    res.json({ message: "Register the user"});
});
//@desc login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res) =>{
    res.json({ message: "Login user"});
});
//@descCurrent user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async(req,res) =>{
    res.json({ message: "get the user current information"});
} );
module.exports = {registerUser, loginUser,currentUser};
