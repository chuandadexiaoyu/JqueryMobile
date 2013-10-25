var mongoose = require('./db');
var Tpoint = exports.model = mongoose.model;

exports.tpointupdatejia = function tpointupdatejia(tit,callback){
  Tpoint.update({'Ttitle': tit},{$inc:{'Tsurplus':1}},{safe: true},function(err,tp){
            if(err)console.log("增加出錯了");
            else  console.log("增加成功");
            callback(tp);
  })
};

exports.tpointupdatejian = function tpointupdatejian(tit,callback){
  Tpoint.update({'Ttitle': tit},{$inc:{'Tsurplus':-1}},{safe:true},function(err,tp){
            if(err)console.log("減少出錯了");
            else console.log("減少成功");
            callback(tp);
  }
  )
};

exports.tpointfindall = function tpointfindall(callback){
    Tpoint.find({},function(err,tpoints){
        if(err)console.log(err);
        callback(tpoints);
    })
};


exports.tpointfindbyname = function tpointfind(tname,callback){
	Tpoint.find({'Ttitle': tname}, function(err, tpoints){
		if(err) console.log(err);
		
		console.log(tpoints);
		callback(tpoints);
		})
};

exports.tpointfindbynas = function tpointfind(tscale,txlon,  
 txlat, callback){
	Tpoint.find({'Tscale': {$gte: tscale}, 'Tlon':{$gte: 103.9907386-txlon, $lte: 103.9907386+txlon}, 'Tlat':{$gte: 30.555103-txlat, $lte: 30.555103+txlat}}, function(err, tpoints){
		if(err) console.log("出現錯誤！！");
		callback("查找成功",tpoints);
		})
};

exports.findbydisandsur = function findbydisandsur(lon, lat, dislon, dislat, sur, callback){
    Tpoint.find({ 'Tlon': {$gte: lon-dislon, $lte: lon+dislon}, 'Tlat': {$gte: lat-dislat, $lte: lat+dislat}, 'Tsurplus': {$gte: sur}},
        function(err, tpoints){
        if(err) console.log(err);
        callback("查詢成功", tpoints);
    }
    )
};
