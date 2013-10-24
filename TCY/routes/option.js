var tpointdao = require('../commondao');
var Tpoint = tpointdao.model;
exports.show = function(req, res){
    var lon = parseFloat(req.body.inputx);
    var lat = parseFloat(req.body.inputy);
    var dis = parseFloat(req.body.inputdis);
    var sur = parseFloat(req.body.inputsur);
    var dislon = null;
    var dislat = null;
    var tpoints = null;
    if(dis==200)
    {
                dislon = 0.0027;
                dislat = 0.0024;

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