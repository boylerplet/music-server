const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  title: String,
  artist: [String],
  date: Date,
  rating: Number,
  url: String,
});

module.exports = mongoose.model("Songs", SongSchema);
