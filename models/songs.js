const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: [40, "Cant enter more than 40 characters"],
  },
  artist: {
    type: [{ type: String, minlength: [1, "No Artist selected"] }],
    default: undefined,
    required: true,
  },
  date: {
    type: Date,
  },
  rating: {
    // type: mongoose.Mixed,
    // 1: Number,
    // 2: Number,
    // 3: Number,
    // 4: Number,
    // 5: Number,
    // default: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 },
    type: Number,
    default: 0,
  },
  url: {
    type: String,
    default:
      "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg",
  },
});

module.exports = mongoose.model("Songs", SongSchema);
