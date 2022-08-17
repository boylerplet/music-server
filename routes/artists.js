const express = require("express");
const router = express.Router();

const artistControls = require("../controllers/atrists");

router
  .route("/")
  .get(artistControls.getAllArtists)
  .post(artistControls.postOneArtist);

router.route("/:id").delete(artistControls.deleteOneArtist);

module.exports = router;
