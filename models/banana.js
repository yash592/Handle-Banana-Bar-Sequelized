module.exports = function(sequelize, Datatypes) {
	var banana = sequelize.define("banana", {

		burgerName: Datatypes.STRING,
		devoured: Datatypes.BOOLEAN

	}, {
		timestamps: true
	});

	return banana;
}

// burger name, devoured, timestamp