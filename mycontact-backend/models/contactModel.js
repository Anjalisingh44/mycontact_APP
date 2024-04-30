const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
   name: {
    type: String,
    required: [true, "please add the contact name"],

   },
   email: {
    type:String,
    required: [true,"please add the email"],
   },
   phone: {
    type:String,
    required: [true,"please add the contact phone number"],
   },
},
   {
    timestamps: true,
   });
   const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

