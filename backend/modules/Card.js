'use strict';
const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  img: { type: String },
  name: { type: String, required: true, unique: true },
  desc: { type: String },
  creator: { type: String, required: true },
  // category: { type: mongoose.Schema.ObjectId, ref: "Category" }, 
  category: {type: String},
  likes: { type: [mongoose.Schema.ObjectId], ref: "User", default: [] },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
