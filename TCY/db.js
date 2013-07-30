var mongoose = require('mongoose');

var Tpoint = new mongoose.Schema({
		Ttitle: String,
		Tcomment: [{body: String, auth: String, date: Date}],
		Tcretime: Date,
		Tscale: Number,
		Tsurplus: Number,
		Tlat: Number,
		Tlon: Number
	});
	
exports.model = mongoose.model('Tpoint',Tpoint);
	mongoose.connect('mongodb://localhost/Tpoint');