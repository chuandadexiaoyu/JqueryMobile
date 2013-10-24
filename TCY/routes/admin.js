/**
 * Created with JetBrains WebStorm.
 * User: chuandadexiaoyu
 * Date: 13-10-22
 * Time: 下午5:37
 * To change this template use File | Settings | File Templates.
 */
var tpointdao = require('../commondao');
var Tpoint = tpointdao.model;
exports.show = function(req, res){
    tpointdao.tpointfindall(function(tpoints){
         res.render("admin",{result:tpoints});
    });

}