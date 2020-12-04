const mongoose = require('mongoose');


const loginSchema = mongoose.Schema({
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Login", loginSchema);
