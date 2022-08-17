const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: [20, "Max allowed 20 chars"],
  },
  lastname: {
    type: String,
    maxlength: [20, "Max allowed 20 chars"],
    default: "",
  },
});

module.exports = mongoose.model("Artists", ArtistSchema);
