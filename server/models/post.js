var mongoose = require('mongoose');
var moment = require('moment');

var PostSchema = mongoose.Schema({
	name: {type: String,
			required: [true, 'Question must not be blank'],
			minlength: [8, 'Question must be 8 characters minimum']}, 
	
	option1: {type: String,
				required: [true, 'Question 1 must not be blank'],
				minlength: [3, 'Question must be 8 characters minimum']}, 
	option1_votes: {type: Number, default: 0},

	option2: {type: String,
				required: [true, 'Question2 must not be blank'],
				minlength: [3, 'Question must be 8 characters minimum']}, 
	option2_votes: {type: Number, default: 0},

	option3: {type: String,
				required: [true, 'Question 3 must not be blank'],
				minlength: [3, 'Question must be 8 characters minimum']}, 
	option3_votes: {type: Number, default: 0},

	option4: {type: String,
				required: [true, 'Question 4 must not be blank'],
				minlength: [3, 'Question must be 8 characters minimum']}, 
	option4_votes: {type: Number, default: 0},

	_userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	_user: String,
	  
	created_at: {type: Date, default: new Date },
	moment: String

})

mongoose.model("Post", PostSchema);