const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: {type: String, required: true},
  username: {type: String, unique: true, required: true},
  email: {type: String, unique: true, required: true},
  tel: { type: String, required: true, unique: true },
  place: { type: String, required: true },
  skills: {type: [String]},
  password: {type: String},
},{ timestamps: true });

module.exports = mongoose.model("User", userScheme);