var obj;
var cup = JSON.parse(localStorage.currentposition);

//確定當前位置
function mapInit(){
	obj = new AMap.Map("map",{
		center:new AMap.LngLat(cup.Tlon,cup.Tlat),
		level:18
	});
	
	var buildings = new AMap.Buildings();
	buildings.setMap(obj);
	marker.setMap(obj);
}

var marker = new AMap.Marker({
		position: new AMap.LngLat(cup.Tlon,cup.Tlat),
		icon:"http://webapi.amap.com/images/marker_sprite.png",
		offset:{x:-8,y:-34}
	});









