
var GET_DATA = 'newstwo';
var socket;

function init(){
	
	socket = io.connect('http://localhost/',{port: 3000});
	
	socket.on(GET_DATA, onGetData);
	console.log("connect to server success!");
	}
	
	function onGetData(data){
		
		document.getElementById('main').innerHTML = JSON.stringify(data);
		socket.emit('my other event two', "Hello server!");
		console.log(data);
		}
