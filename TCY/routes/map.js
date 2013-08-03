var tpointdao = require('../commondao');
var Tpoint = tpointdao.model;

exports.show = function(req, res){
    tpointdao.tpointfindbynas(20, 0.0027, 0.0024, function(err,tpoints){
	//	console.log(tpoints);
		console.log(tpoints.length);
    //	console.log("傳值成功，開始跳轉");
        res.render("test",{result: tpoints});

    });
};