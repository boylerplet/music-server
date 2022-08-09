const Songs = require("../models/songs");

const getAllSongs = async (req, res) => {
  try {
    const songs = await Songs.find({});
    res.status(200).json({ songs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error });
  }
};

const postOneSong = async (req, res) => {
  try {
    const song = await Songs.create(req.body);
    res.status(201).json({ song });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error });
  }
};

const getOneSong = async (req, res) => {
  try {
    const songID = req.params.id;
    const song = await Songs.findOne({ _id: songID });
    if (!song) {
      return res.status(404).send({ msg: `No song with ID: ${songID}` });
    }
    res.status(200).json({ song });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error });
  }
};

const deleteOneSong = async (req, res) => {
  try {
    const songID = req.params.id;
    const song = await Songs.findOneAndDelete({ _id: songID });
    if (!song) {
      return res.status(404).send({ msg: `No song with ID: ${songID}` });
    }
    res.status(200).json({
      msg: `Deleted song ${song.title} with ID: ${songID}`,
      song: song,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
};

const patchOneSong = async (req, res) => {
  try {
    const { id: songID } = req.params;
    const song = await Songs.findOneAndUpdate({ _id: songID }, req.body, {
      returnDocument: "after",
      new: false,
      runValidators: true,
    });
    if (!song) {
      return res.status(404).send({ msg: `No song with ID: ${songID}` });
    }
    res.status(200).json({ song });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllSongs,
  getOneSong,
  postOneSong,
  deleteOneSong,
  patchOneSong,
};
