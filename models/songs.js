const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		maxlength: [40, 'Cant enter more than 40 characters'],
	},
	artist: {
		type: [{ type: String, minlength: [1, 'No Artist selected'] }],
		default: undefined,
		required: true,
	},
	date: {
		type: Date,
	},
	rating: {
		type: mongoose.Mixed,
		1: Number,
		2: Number,
		3: Number,
		4: Number,
		5: Number,
		default: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
	},
	url: {
		type: String,
		default:
			'https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg',
	},
	genre: {
		list: {
			type: [String],
			default: [
				'None',
				'Electronic Dance Music',
				'Rock',
				'Jazz',
				'Dubstep',
				'Rhythm and Blues',
				'Country Music',
				'Pop Music',
			],
		},
		set: { type: Number, min: 0, max: 7 },
	},
});
module.exports = mongoose.model('Songs', SongSchema);
