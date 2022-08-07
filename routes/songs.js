const express = require("express");
const router = express.Router();

const songControls = require("../controllers/songs");

router.route("/").get(songControls.getAllSongs).post(songControls.postOneSong);

router
  .route("/:id")
  .get(songControls.getOneSong)
  .delete(songControls.deleteOneSong);

module.exports = router;

// app.get("/api/songs/")
// app.post("/api/songs/")
// app.get("/api/songs/:id")
// app.patch("/api/songs/:id")
// app.delete("/api/songs/:id")
