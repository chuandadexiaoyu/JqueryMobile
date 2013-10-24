var options = {
  enableHighAccuracy: true,
  timeout: 50000,
  maximumAge: 0
};
function success(pos) {
  var crd = pos.coords;
  if(typeof(Storage)!="undefined"){
		lat = crd.latitude;
		lon = crd.longitude;
		var currentposition = {
			'Tlon': lon,
			'Tlat': lat
		};				
		localStorage.currentposition = JSON.stringify(currentposition);
		localStorage.currentacu = crd.accuracy;
        console.log("當前位置數據數據存儲成功了。");
        document.getElementById("inputx").value = Math.round(lon * 1000000) / 1000000.00;
        document.getElementById("inputy").value = Math.round(lat * 1000000) / 1000000.00;
       }else{
		console.log("web storage not supports");
        alert("您的瀏覽器不支持本地存儲，不適合用YI軟件，請諒解。");
	}
};
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};
function getc(success, error, options){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success, error, options);
    }else{
        console.log("not for geolocation");
        alert("您的瀏覽器不支持定位，不適合用YI軟件，請諒解。");
    }
};



