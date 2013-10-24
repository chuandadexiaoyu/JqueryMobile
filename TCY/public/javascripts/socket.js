var GET_DATA = 'news';
var socket;
var changedata = {
    Ttitle: "川大江安停車場16",
    Tsurplus: 0
}

results  = JSON.parse(localStorage.result);
function init(){
	socket = io.connect('http://localhost/',{port: 3000});
    console.log("connect to server success!");
    socket.emit('my other event',changedata);
	socket.on(GET_DATA, onGetData);
}
	
	function onGetData(data){
	    var datas = JSON.stringify(data);
        console.log("收到變更的數據！！");
		console.log(datas);
        if(results)
        {
            console.log("Hello chuandadexiaoyu!!");
            console.log(results);
            console.log(results.length);
        }
    }
