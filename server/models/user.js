var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
	name: String,
	created_at: {type: Date, dafault: new Date}
})

mongoose.model('User', UserSchema);