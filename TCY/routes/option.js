var tpointdao = require('../commondao');
var Tpoint = tpointdao.model;
exports.show = function(req, res){
    var lon = req.body.inputx;
    var lat = req.body.inputy;
    var dis = req.body.inputdis;
    var sur = req.body.inputsur;
    var dislon = null;
    var dislat = null;
    var tpoints = null;
    console.log(lon+lat+dis+sur+dislon+dislat);

    if(dis==200)
    {
                dislon = 0.0027;
                dislat = 0.0024;
            console.log(dislon+dislat);
            tpointdao.findbydisandsur(lon, lat, dislon, dislat, sur, function(err, tpoints){
                console.log(tpoints);
                res.render('option', {result: tpoints});
            });

    }else{
            dislon = 0.0040;
            dislat = 0.0033;
            tpointdao.findbydisandsur(lon, lat, dislon, dislat, sur, function(err, result){
                res.render('option', {result: tpoints});
            });
    }


};