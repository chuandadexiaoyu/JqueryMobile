
var GET_DATA = 'news';
var socket;

function init(){
	
	socket = io.connect('http://localhost/',{port: 3000});
	
	socket.on(GET_DATA, onGetData);
	console.log("connect to server success!");
	}
	
	function onGetData(data){
		
		document.getElementById('main').innerHTML = JSON.stringify(data);
		socket.emit('my other event', "Hello server!");
		console.log(data);
		}
