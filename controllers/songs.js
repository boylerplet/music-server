const Songs = require("../models/songs");

const getAllSongs = (req, res) => {
  res.send("This is all songs");
};

const getOneSong = (req, res) => {
  res.send("Get single song");
};

const postOneSong = async (req, res) => {
  const song = await Songs.create(req.body);
  res.status(201).json({ song });
};

const deleteOneSong = (req, res) => {
  res.send("Delete single song");
};

module.exports = {
  getAllSongs,
  getOneSong,
  postOneSong,
  deleteOneSong,
};
