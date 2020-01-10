const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//  Defining the userSchema
const userSchema = Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile_img: {
    type: String,
    required: true
  }
});

// creating model

let User = new model("user", userSchema);
module.exports = User;