var GET_DATA = 'news';
var socket;
results  = JSON.parse(localStorage.result);
function init(){
    socket = io.connect('http://localhost/',{port: 3000});
    console.log("connect to server success!");
    socket.on(GET_DATA, onGetData);

}
//在這個函數里更新數據
function onGetData(data){
    var datas = data.data[0];
    console.log("收到數據！！");
    for(var i=0; i<results.length; i++){
        if(results[i].Ttitle == datas.Ttitle)
        {
            //存儲數據
            var x = results[i];
            x.Tsurplus = datas.Tsurplus;
            results[i] = x;
            localStorage.result = JSON.stringify(results);

            //更新數據
            /*
            var pupd = new AMap.LngLat(x.Tlon, x.Tlat);
            var titleupd = x.Ttitle;
            var commentupd = x.Tcomment[0].body;
            var scaleupd = x.Tscale;
            var surplusupd = x.Tsurplus;
            var infoupd = creinfo(titleupd, scaleupd, surplusupd,commentupd);
            var markerupd = cremarker(pupd, objshow);
            var infowindowupd = creinfowindow(infoupd);
            addlisten(markerupd, infowindowupd, objshow);
            //更新成功
            */
            var p=document.getElementById(datas.Ttitle+"sur");
            p.innerHTML=datas.Tsurplus;
            console.log("更新成功");
            break;
        }
    }
}