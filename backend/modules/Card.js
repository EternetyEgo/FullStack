const mongoose = require("mongoose");

const cardScheme =  new mongoose.Schema({
  img: String,
  name: String,
  desc: String,
  creator: String
});

const Card = mongoose.model("Card", cardScheme);

module.exports.cardScheme = Card;
