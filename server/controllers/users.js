var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = {

	create: function(req, res){

		User.findOne({name: req.body.name}, function(err, result){
			if(err){
				console.log(err)
			}
			else{
				console.log(result);
				if(result == null){
					var newUser = new User(req.body);

					newUser.save(function(err, user){
						if(err){
							console.log(err)
						}
						else{
							// console.log(user);

							res.json(user);
						}
					})
				}
				
				else{
					res.json(result);
				}
			}
		})
		
	},

	index: function(req, res){
		User.find({}).exec(function(err, results){
			if(err){
				console.log(err)
			}
			else{
				res.json(results)
			}
		})
	}
}