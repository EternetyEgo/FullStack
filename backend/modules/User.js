const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: String,
  username: {type: String, unique: true},
  email: {type: String, unique: true},
  password: String,
});

module.exports = mongoose.model("User", userScheme);


