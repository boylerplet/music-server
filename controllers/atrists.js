const Artists = require("../models/artists");

const getAllArtists = async (req, res) => {
  try {
    const artists = await Artists.find({});
    res.status(200).json(artists);
  } catch (error) {
    console.log(error);
  }
};

const postOneArtist = async (req, res) => {
  try {
    const artist = await Artists.create(req.body);
    res.status(201).json({ msg: "Artist Added succesfully", artist });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error.name, msg: error.message });
  }
};

const deleteOneArtist = async (req, res) => {
  try {
    const artistID = req.params.id;
    const artist = await Artists.findOneAndDelete({ _id: artistID });
    if (!artist) {
      return res.status(404).send({ msg: `No artist with ID: ${artistID}` });
    }
    res.status(200).json({
      msg: `Deleted artist ${
        (artist.firstname, artist.lastname)
      } with ID: ${artistID}`,
      artist: artist,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
};

module.exports = { getAllArtists, postOneArtist, deleteOneArtist };
