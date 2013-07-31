var obj;
var cup = JSON.parse(localStorage.currentposition);

//確定當前位置
function mapInit(){
	obj = new AMap.Map("map",{
		center:new AMap.LngLat(cup.lon,cup.lat),
		level:18
	});
	
	var buildings = new AMap.Buildings();
	buildings.setMap(obj);
	marker.setMap(obj);
}

var marker = new AMap.Marker({
		position: new AMap.LngLat(cup.lon,cup.lat),
		icon:"http://webapi.amap.com/images/marker_sprite.png",
		offset:{x:-8,y:-34}
	});





//確定當前位置和顯示查詢數據
function mapfortpoints(result){
	var findtpoints = result; 
	
	//初始化3D地圖
	obj = new AMap.Map("map",{
		center:new AMap.LngLat(cup.lon,cup.lat),
		level:18
	});
	var buildings = new AMap.Buildings();
	buildings.setMap(obj);
	
	
	
	var info = [];

	info.push("<div><div><img style=\"float:left;\" src=\" 		 http://webapi.amap.com/images/autonavi.png \"/></div> ");

	info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>高德软件</b>"); 

	info.push("电话 : 010-84107000   邮编 : 100102"); 

	info.push("地址 : 北京市望京阜通东大街方恒国际中心A座16层</div></div>");
	
	
//	AddMarkers(findtpoints[0], info, obj);
	
	
	
	
	
	//顯示當前位置
	var marker = new AMap.Marker({
		position: new AMap.LngLat(findtpoints[0].Tlon,findtpoints[0].lat),
		icon:"http://webapi.amap.com/images/marker_sprite.png",
		offset:new AMap.Pixel(-8,-34)
	});
	marker.setMap(obj);
	
	var InfoWindow = new AMap.InfoWindow({
//	isCustom: true,
	content:info.join("<br/>"),
	size: new AMap.Size(300,0), 
	offset:new AMap.Pixel(-8,-34)

	}); 
	
	AddLis(InfoWindow, obj, marker);
	
	
/*	
	var info = [];

	info.push("<div><div><img style=\"float:left;\" src=\" 		 http://webapi.amap.com/images/autonavi.png \"/></div> ");

	info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>高德软件</b>"); 

	info.push("电话 : 010-84107000   邮编 : 100102"); 

	info.push("地址 : 北京市望京阜通东大街方恒国际中心A座16层</div></div>")
 

	var InfoWindow = new AMap.InfoWindow({
//	isCustom: true,
	content:info.join("<br/>"),
	size: new AMap.Size(300,0), 
	offset: {x:20, y:21}

	}); 
	
	
	AMap.event.addListener(marker,'click',function(){
		InfoWindow.open(obj,marker.getPosition());	
	});

	var mymarkers = new Array(findtpoints.length);
	var myinfos = new Array(findtpoints.length);
	var myInfoWindows = new Array(findtpoints.length);
	var myboxsfmarkers = new Array(findtpoints.length);
    var myboxsfwindows = new Array(findtpoints.length);
	
	//開始循環地把查詢結果放到地圖上
	for(var i=0; i<findtpoints.length; i++){
			
	    mymarkers[i] = new AMap.Marker({
		position: new AMap.LngLat(findtpoints[i].Tlon, findtpoints[i].Tlat),
		icon:"http://webapi.amap.com/images/marker_sprite.png",
		offset:{x:-8,y:-34}
	});
	
	mymarkers[i].setMap(obj)
	
	
	myinfos[i] = [];

	myinfos[i].push("<div><div><img style=\"float:left;\" src=\" 		 http://webapi.amap.com/images/autonavi.png \"/></div> ");
	myinfos[i].push("<div style=\"padding:0px 0px 0px 4px;\"><b>高德软件</b>"); 
	myinfos[i].push("电话 : 010-84107000   邮编 : 100102"); 
	myinfos[i].push("地址 : 北京市望京阜通东大街方恒国际中心A座16层</div></div>")
 

	myInfoWindows[i] = new AMap.InfoWindow({
//	isCustom: true,
	content:myinfos[i].join("<br/>"),
	size: new AMap.Size(300,0), 
	offset: {x:20, y:21}

	}); 
	
    myboxsfmarkers[i] = mymarkers[i].getPosition();
    myboxsfwindows = myInfoWindows[i];
	
	AMap.event.addListener(mymarkers[i],'click',function(){
		myboxsfwindows.open(obj, myboxsfmarkers[i]);	
	});


	}
	*/
}

function AddLis(InfoWindow, obj, marker){
	AMap.event.addListener(marker, 'click', function(){
		InfoWindow.open(obj, marker);	
	});
}




function AddMarkers(findtpoints,myinfos,obj){
	
	var marker = new AMap.Marker({
		position: new AMap.LngLat(findtpoints.Tlon,findtpoints.Tlat),
		icon:"http://webapi.amap.com/images/marker_sprite.png",
		offset:{x:0, y:0}
	});
	marker.setMap(obj);
	
	var myInfoWindows = new AMap.InfoWindow({
//	isCustom: true,
	content:myinfos.join("<br/>"),
	size: new AMap.Size(300,0), 
	offset: {x:20, y:21}
	});
	
	AMap.event.addListener(marker, 'click', function(){
		myInfoWindows.open(obj, marker);	
	});
	
	}

	