
/*
 * GET home page.
 */

var tpointdao = require('../commondao');
var Tpoint = tpointdao.model;

exports.index = function(req, res){
/*	  
	var Tp = new Tpoint({
		Ttitle: "川大停車場",
		Tcomment: [{body:"很好的停車場呢", auth: 'chuandadexiaoyu', date: new Date() }],
		Tcretime: new Date(),
		Tscale: 70,
		Tsurplus: 30,
		Tlat: 50.111111111111,
		Tlon: 20.111111111111
		});
		
	Tp.save(function(err){
			if(err) return console.log("Write into Mongodb failed...");
			console.log("Write into Mongodb success!!");
		});
*/
	tpointdao.tpointfindbynas("川大停車場",50,function(err,tpoints){
		res.render('index',{
			title: 'Express',
			result: tpoints,
			});
		});		
};

