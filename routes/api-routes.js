var db = require("../models");

//ROUTES

module.exports = function(app) {

	// GET routes

	app.get("/api/bananas/", function(req, res) {
		db.banana.findAll({})
		.then(function(banana) {
			res.json(banana);
		})
	})
}