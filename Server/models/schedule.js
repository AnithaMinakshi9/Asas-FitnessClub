const mongoose = require('mongoose');


const scheduleSchema = mongoose.Schema({
	date: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Schedules", scheduleSchema);
