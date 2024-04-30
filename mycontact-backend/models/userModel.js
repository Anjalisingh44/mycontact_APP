const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Enter the username"],
    },
    email:{
        type: String,
        required: [true, "Enter the  email"],
    },
    password:{
        type: String,
        required: [true,"Enter the password"],
    },
},
{
    timestamps: true,
   });
   const user = mongoose.model('user', Schema);

module.exports = user;

