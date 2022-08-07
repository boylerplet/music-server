const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./database/connect");
require("dotenv").config();

const songs = require("./routes/songs");

// middleware
app.use("/api/songs/", songs);
app.use(bodyParser.json());
// routes
app.get("/", (req, res) => {
  res.send("Root page");
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
