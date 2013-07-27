//查詢條件condition lat1,lat2,lon1,lon2,surplus1,surplus2,price1,price2,
function condition(){
	this.lat1 = 0.000000;
	this.lat2 = 1.000000;
	this.lon1 = 0.000000;
	this.lon2 = 1.000000;
	this.surplus1 = 0;
	this.surplus2 = 50;
	this.price1 = 0;
	this.price2 = 2;	
}

//查詢結果result
result = null;

//Tdata:更新的停車場的信息，包括名字name，剩餘車位數surplus
function Tdata(){
	this.name = "川大停車場";
	this.surplus = 20;
}