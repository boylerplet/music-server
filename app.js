// default imports
const express = require("express");
const app = express();

// other imports
const bodyParser = require("body-parser");
const connectDB = require("./database/connect");
require("dotenv").config();
const songs = require("./routes/songs");
// middleware
app.use(bodyParser.json());
app.use("/api/songs/", songs);
// routes
app.get("/", (req, res) => {
  res.send("Root page");
});
app.all("*", (req, res) => {
  res.status(404).send("The resource does not exist");
});
// launch server
const port = 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server listening on port ${port}`));
  } catch (err) {
    console.error(err);
  }
};
start();
