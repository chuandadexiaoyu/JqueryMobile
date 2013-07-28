var condition = require('./globalvalue').condition;
var result = require('./globalvalue').result;
var Tdata = require('./globalvalue').Tdata;   

function CommonDao(Model){
	if(typeof Model == 'undefined' || Model == null)
		throw new Errow('Model can not be null');
		console.log("CommonDao of model Success");
		this.model = Model;
}

//多條件，範圍查詢用戶要查的信息
CommonDao.protype.getByCondition = function (condition, callback){
	this.model.find(
			{
			Tlat: { $gt: condition.lat1, $lt:condition.lat2},
			Tlon: { $gt: condition.lon1, $lt: condition.lon2},
			Tsurplus: { $gt: condition.surplus1, $lt: condition.surplus2},
			Tprice: { $gt: condition.price1, $lt: condition.price2},
			},
			function(error, result){
			if(error) return callback(error);
			console.log("查詢成功",result);
			return callback(result);
			
			});
}

//由停車場工作人員更新停車場的剩餘停車位的信息
CommonDao.prototype.updatesurplusbyname = function (Tdata, callback){
	this.model.update(
		{ Tname:  Tdata.name},
		{ 'Tsurplus':  Tdata.surplus },
		function(error){
			if(error) return callback(error);
			console.log("更新停車場成功");
			return callback(null);
		});
}

//管理員增加停車場
CommonDao.prototype.addmore = function (TTpoint,callback){
	this.model.create(TTpoint,function(error,callback){
		if(error) return callback(error);
		console.log("新增停車場成功",TTpoint);
		return callback(null);
		})
}

module.exports = CommonDao;