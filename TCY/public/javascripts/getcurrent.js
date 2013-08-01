var options = {
  enableHighAccuracy: true,
  timeout: 50000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  console.log(crd.latitude);
  console.log(crd.longitude);
  //HTML5本地存儲數據
  if(typeof(Storage)!="undefined"){
		console.log("web storage supports");
		lat = crd.latitude;
		lon = crd.longitude;
		var currentposition = {
			'Tlon': lon,
			'Tlat': lat
		};				
		localStorage.currentposition = JSON.stringify(currentposition);
		localStorage.currentacu = crd.accuracy;
	}else{
		console.log("web storage not supports");
	}
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};
//調用getCurrentPosition得到當前位置經緯度，並且存儲到本地數據庫
if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(success, error, options);
}else{
		console.log("not for geolocation");
}
