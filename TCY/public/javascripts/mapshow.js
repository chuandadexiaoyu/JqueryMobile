var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
//  var crd = pos.coords;
  
  if(typeof(Storage)!="undefined"){
		console.log("web storage supports");
/*		
		localStorage.currentpositionlat = crd.latitude;
		localStorage.currentpositionlon = crd.longitude;
		localStorage.currentacu = crd.accuracy;
*/		
		console.log('Your current position is:');
  		console.log('Latitude : ' + localStorage.currentpositionlat);
  		console.log('Longitude: ' + localStorage.currentpositionlon);
 	    console.log('More or less ' + localStorage.currentacu + ' meters.');
	}else{
		console.log("web storage not supports");
	}
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);

var obj;
function mapInit(){
	obj = new AMap.Map("map",{
		center:new AMap.LngLat(localStorage.currentpositionlon,localStorage.currentpositionlat),
		level:18
	});
	var buildings = new AMap.Buildings();
	buildings.setMap(obj);
}

function addMarker(){
	var marker = new AMap.Marker({
		map:obj,
		position: new AMap.LngLat(localStorage.currentpositionlon,localStorage.currentpositionlat),
		icon:"http://webapi.amap.com/images/marker_sprite.png",
		offset:{x:-8,y:-34}
	});
}