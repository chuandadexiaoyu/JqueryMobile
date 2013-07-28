var CommonDao = require('./commondao'),
	Tpoint = require('./db');
	
	var TpointDao = new CommonDao(Tpoint);
	
	module.exports = TpointDao;