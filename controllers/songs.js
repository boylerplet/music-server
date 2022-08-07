const getAllSongs = (req, res) => {
  res.send("This is all songs");
};

const getOneSong = (req, res) => {
  res.send("Get single song");
};

const postOneSong = (req, res) => {
  //   res.json(req.body);
  res.send("Add one song");
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
