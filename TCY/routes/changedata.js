var tpointdao = require('../commondao');
var Tpoint = tpointdao.model;
exports.show = function(req, res){
      var tit=req.body.tit;
      var chose=req.body.chose;
      console.log("進來了！！！"+tit);
      if(chose==="jia"){
          tpointdao.tpointupdatejia(tit,function(tp){
           /*
          io.sockets.on("connection",function(socket){
              socket.emit('news',{data: tp});
          });
          */
              console.log("跳轉開始");
          res.redirect('/admin');
          })
      }
      else{
          tpointdao.tpointupdatejian(tit,function(tp){
              /*
          io.sockets.on("connection",function(socket){
              socket.emit('news',{data: tp});
          });
          */
              console.log("跳轉開始");
          res.redirect('/admin');
          })
      }
};
