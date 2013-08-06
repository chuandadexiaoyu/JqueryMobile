
/*
 * GET home page.
 */


//var tpointdao = require('../commondao');
//var Tpoint = tpointdao.model;

exports.index = function(req, res){


    res.render('aindex');
/*
    io.sockets.on("connection", function(socket){
            socket.on('my other event', function(data){
                socket.broadcast.emit('news', data);
                console.log(data);
        });


//        socket.disconnect(socket);
//				socket.emit('news', {hello: 'world'});
    });
*/
     //   res.render("socket",{title: "Hello chuandadexiaoyu!!"});
/*
	var Tp = new Tpoint({
		Ttitle: "川大江安停車場",
		Tcomment: [{body:"很好的停車場呢", auth: 'chuandadexiaoyu', date: new Date() }],
		Tcretime: new Date(),
		Tscale: 70,
		Tsurplus: 30,
		Tlat: 30.552412,
		Tlon: 103.989673
		});
		
	Tp.save(function(err){
			if(err) return console.log("Write into Mongodb failed...");
			console.log("Write into Mongodb success!!");
		});
*/
/*	tpointdao.tpointfindbynas(20, 0.0027, 0.0024, function(err,tpoints){
//		console.log(tpoints);
//		console.log(tpoints.length);
//		console.log("傳值成功，開始跳轉");
		res.render('index',{
			title: 'Express',
			result: tpoints
			});
		});
  */
};

