const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url).then(console.log("connected to DB"));
};

module.exports = connectDB;
