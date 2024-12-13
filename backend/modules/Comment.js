const mongoose = require("mongoose");

const commentScheme = new mongoose.Schema(
  {
    text: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    created_at: { type: Date, default: Date.now },
    card_id: { type: mongoose.Schema.Types.ObjectId, ref: "Card", required: true },
    parent_id: { type: mongoose.Schema.Types.ObjectId, ref: "Card", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentScheme);
