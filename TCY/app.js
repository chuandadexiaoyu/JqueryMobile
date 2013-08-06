/**
 * Module dependencies.
 */

var express = require('express')
  , db = require('./db')	
  , routes = require('./routes')
  , user = require('./routes/user')
  , map = require('./routes/map')
  , xiaoyu = require('./routes/xiaoyu')
  , button = require('./routes/button')
  , sockets = require('./routes/sockets')
  , socketone = require('./routes/socketone')
  , socketthree = require('./routes/socketthree')
  , utilroute = require('./routes/utilroute')
  , find =require('./routes/find')
  , option = require('./routes/option')
  , map = require('./routes/map')
  , list = require('./routes/list')
 // , gotoj = require('./routes/gotojquery')
  //, gotou = require('./routes/gotoupdate')
  , http = require('http')
  , path = require('path')
//  , io = require('socket')
  ;

var app = express();


// all environments

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
app.get('/xiaoyu', xiaoyu.xiaoyu);
app.get('/button', button.show);
//app.get('/socketcopy', sockets.show);
//app.get('/socketone', socketone.show);
app.get('/socketthree', socketthree.show);
app.get('/utilroute', utilroute.show);
app.get('/find', find.show);
app.get('/option', option.show);
app.get('/map', map.show);
app.get('/list', list.show);

//app.get('/gjquery', gotoj.gotojquery);

server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

io = require('socket.io').listen(server);

    io.sockets.on("connection", function(socket){
        socket.on('my other event', function(data){
            socket.broadcast.emit('news', data);
            console.log(data);
        });


//        socket.disconnect(socket);
//				socket.emit('news', {hello: 'world'});
    });


