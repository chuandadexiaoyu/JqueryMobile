var express = require('express')
  , db = require('./db')	
  , routes = require('./routes')
  , user = require('./routes/user')
  , map = require('./routes/map')
  , button = require('./routes/button')
  , utilroute = require('./routes/utilroute')
  , find =require('./routes/find')
  , option = require('./routes/option')
  , map = require('./routes/map')
  , list = require('./routes/list')
  , admin = require('./routes/admin')
  , changedata = require('./routes/changedata')
  , woaixiaoguniang = require('./routes/woaixiaoguniang')
  , http = require('http')
  , path = require('path')
  ;

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/map', map.show);
app.get('/button', button.show);
app.get('/utilroute', utilroute.show);
app.get('/find', find.show);
app.post('/option', option.show);
app.get('/map', map.show);
app.get('/list', list.show);
app.get('/woaixiaoguniang', woaixiaoguniang.show);
app.get('/admin',admin.show);

server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);
io.set('log level', 1);
var tpointdao = require('./commondao');
var Tpoint = tpointdao.model;

app.post('/changedata',function(req, res){
    var tit=req.body.tit;
    var chose=req.body.chose;
    if(chose==="jia"){
           tpointdao.tpointupdatejia(tit,function(tp){
               console.log("success");
           });
        }
    else{
        tpointdao.tpointupdatejian(tit,function(tp){
            console.log("success");
        });
        }
    console.log("跳轉開始");

    tpointdao.tpointfindbyname(tit,function(tpoints){
        console.log("I am here");
        io.sockets.emit('news',{data: tpoints});
    });

    res.redirect('/admin');
});







