var options = {
  enableHighAccuracy: true,
  timeout: 50000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  //HTML5本地存儲數據
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
       //更新經緯度的輸入數據，讓用戶和開發者知道位置

       }else{
		console.log("web storage not supports");
        alert("您的瀏覽器不支持本地存儲，不適合用YI軟件，請諒解。");
	}
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};
//調用getCurrentPosition得到當前位置經緯度，並且存儲到本地數據庫

function getc(success, error, options){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success, error, options);
    }else{
        console.log("not for geolocation");
        alert("您的瀏覽器不支持定位，不適合用YI軟件，請諒解。");
    }
};



