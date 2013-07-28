var mongoose = require('mongoose');

var TPoint = new mongoose.Schema({
		Ttitle: String,
		Tcomment: [{body: String, auto: String, date: Date}],
		Tcretime: Date,
		Tscale: Number,
		Tsurplus: Number,
		Tlat: Number,
		Tlon: Number
	});
	
module.exports = mongoose.model('TPoint',TPoint);
	mongoose.connect('mongodb://localhost/TPoint');