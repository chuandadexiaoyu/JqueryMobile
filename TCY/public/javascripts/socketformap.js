
var GET_DATA = 'news';
var socket;
/*
function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJs("/javascripts/mapshow.js");
*/
results  = JSON.parse(localStorage.result);
function init(){

//	if(results) {console.log(results.length);console.log(results);}


    socket = io.connect('http://localhost/',{port: 3000});
    console.log("connect to server success!");
//    socket.emit('my other event',changedata);
    socket.on(GET_DATA, onGetData);

}

function onGetData(data){

    var datas = JSON.stringify(data);
    console.log("收到數據！！");
    console.log(datas);

    for(var i=0; i<results.length; i++){
        if(results[i].Ttitle == data.Ttitle)
        {
            var p = results[i];
            console.log(p.Tsurplus);
            p.Tsurplus = data.Tsurplus;
            results[i] = p;
            localStorage.result = JSON.stringify(results);
//            console.log(JSON.parse(localStorage.result));
            break;
        }
    }

}
