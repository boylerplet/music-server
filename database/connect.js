const mongoose = require('mongoose');

const connectDB = (url) => {
	// console.log(url);
	mongoose.set('strictQuery', true);
	mongoose.connect(url).then(console.log('connected to DB'));
};

module.exports = connectDB;
