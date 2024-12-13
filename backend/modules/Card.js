const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    img: { type: String },
    name: { type: String, required: true, unique: true },
    desc: { type: String },
    creator: { type: mongoose.Schema.ObjectId, ref: "User", required: true }, 
    technologies: [String],
    likes: { type: [mongoose.Schema.ObjectId], ref: "User", default: [] },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
