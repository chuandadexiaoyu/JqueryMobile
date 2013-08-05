var obj;
var cup = JSON.parse(localStorage.currentposition);
var position = new AMap.LngLat(cup.Tlon, cup.Tlat);
var radius = 350;
	//初始化3D地圖
	creobj(position);
	crecircle(obj, radius);
var marker = cremarker(position, obj);
var title = "川大江安停車場";
var comment = "很好的停車場哦";
var scale = 70;
var surplus = 30;
var info = creinfo(title, scale, surplus, comment);
var infowindow = creinfowindow(info);


//確定當前位置和顯示查詢數據
function mapfortpoints(result){
	//顯示當前位置
	addlisten(marker, infowindow, obj);

	//顯示返回的結果
	
	for(var i=0; i<result.length; i++){
		
	position = new AMap.LngLat(result[i].Tlon, result[i].Tlat);
	title = result[i].Ttitle;
	comment = result[i].Tcomment[0].body;
	scale = result[i].Tscale;
	surplus = result[i].Tsurplus;
	info = creinfo(title, scale, surplus,comment);
	marker = cremarker(position, obj);	
	infowindow = creinfowindow(info);
	addlisten(marker, infowindow, obj);


//        var x=document.getElementById("川大江安停車場2");
//        console.log(x.innerHTML);
/*
    var y = document.getElementsByClassName('amap-statics');//.getElementById('川大江安停車場10');
        console.log(y[0]);
*/
	}
    init();

}

function creobj(position){
	obj = new AMap.Map("map",{
		center:position,
		level:17
	});
	var buildings = new AMap.Buildings();
	buildings.setMap(obj);
}



function cremarker(position,obj){
		
		return new AMap.Marker({
		map: obj,
		position: position,
		icon:"http://webapi.amap.com/images/0.png",
		offset:new AMap.Pixel(0, 0)
	});
}

function creinfo(title, scale, surplus, comment){
	var info = [];
	
	info.push("<div id=title ><div><img style=\"float:left;\" src=\" 		 http://webapi.amap.com/images/autonavi.png \"/></div> ");

	info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>這裡是"+title+"</b>");

	info.push("本停車場可以容納: "+ scale  +" 輛車");

	info.push("現在還有 "+"<p" + " id="+ title+">"+surplus+ "</p>"+" 個停車位");
	info.push("評語:  "+comment+"</div></div>");
	
	return info;

}

function creinfowindow(info){
		return new AMap.InfoWindow({
	content:info.join("<br/>"),
	size: new AMap.Size(300,0), 
	offset:new AMap.Pixel(0,0)

	}); 
}

function addlisten(marker,infowindow,obj){
		AMap.event.addListener(marker,'click',function(){
		infowindow.open(obj, marker.getPosition());
	});
}


function crecircle(obj, radius){

	circle = new AMap.Circle({

	map:obj,

	center:obj.getCenter(),//圆心，基点

	radius:radius,//半径

	strokeColor: "#fffef9",//线颜色

	strokeOpacity: 1,//线透明度

	strokeWeight: 3,//线宽

	fillColor: "#65c294",//填充颜色

	fillOpacity: 0.35//填充透明度

	});
}

function fn(e){ 
	document.getElementById("mapX").value=e.lnglat.getLng(); 
	document.getElementById("mapY").value=e.lnglat.getLat();  
}

function mapclick() 
{ 
	listener=AMap.event.addListener(obj,'click',fn);
}

//socket for map 監聽停車剩餘車位的變化

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
    var datas = JSON.stringify(data);
    console.log("收到數據！！");
    console.log(datas);
    for(var i=0; i<results.length; i++){
        if(results[i].Ttitle == data.Ttitle)
        {
            //存儲數據
            var x = results[i];
            x.Tsurplus = data.Tsurplus;
            results[i] = x;
            localStorage.result = JSON.stringify(results);

            //更新數據
            var pupd = new AMap.LngLat(x.Tlon, x.Tlat);
            var titleupd = x.Ttitle;
            var commentupd = x.Tcomment[0].body;
            var scaleupd = x.Tscale;
            var surplusupd = x.Tsurplus;
            var infoupd = creinfo(titleupd, scaleupd, surplusupd,commentupd);
            var markerupd = cremarker(pupd, obj);
            var infowindowupd = creinfowindow(infoupd);
            addlisten(markerupd, infowindowupd, obj);
            //更新成功
            console.log("更新成功");
            break;
        }
    }
}
