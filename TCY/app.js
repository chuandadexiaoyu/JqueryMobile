/**
 * Module dependencies.
 */

var express = require('express')
  , db = require('./db')	
  , routes = require('./routes')
  , user = require('./routes/user')
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

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
		setInterval(function(){
			socket.emit('news', {hello: 'world'})}
			, 5000);
		socket.on('my other event', function(data){
				console.log(data);
//				socket.emit('news', {hello: 'world'});
			});
	});
