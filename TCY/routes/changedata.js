var tpointdao = require('../commondao');
var Tpoint = tpointdao.model;
exports.show = function(req, res){
      var tit=req.body.tit;
      var chose=req.body.chose;
      console.log("進來了！！！"+tit);
      if(chose==="jia"){
          tpointdao.tpointupdatejia(tit);
      }
      else{
          tpointdao.tpointupdatejian(tit);
      }

    res.redirect('/admin');
};
