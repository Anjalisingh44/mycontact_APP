const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Enter the username"],
    },
    email:{
        type: String,
        required: [true, "Enter the  email"],
        unique:[true, "email address already taken"],
    },
    password:{
        type: String,
        required: [true,"Enter the password"],
    },
},
{
    timestamps: true,
   });
   const user = mongoose.model('user', userSchema);

module.exports = user;

