var mongoose = require('mongoose');

var Post = mongoose.model('Post');
var User = mongoose.model('User');

module.exports = {

	index: function(req, res){
		Post.find({}).populate('_userid').exec(function(err, results){
			if(err){
				console.log(err)
			}
			else{
				res.json(results)
			}
		})
	},

	create: function(req, res){


		var newPost = new Post(req.body);

		newPost.save(function(err){
			if(err){
				res.status(400);
				res.json(err);
				// console.log(err)
			}
			else{
				res.json(true)
			}
		})

	},

	delete: function(req, res){
		console.log(req.params.id);
		Post.remove({_id: req.params.id}, function(err){
			if(err){
				console.log(err)
			}
			else{
				res.json(true);
			}
		})
	},

	show: function(req, res) {
		// console.log(req.params.id);
	 	Post.findById(req.params.id).exec(function(err, results){
	 		if(err){
	 			console.log(err)
	 		}
	 		else{
	 			res.json(results);

	 		}
	 	})
	},

	update: function(req, res) {
		// console.log(req.params.id);
		// console.log(req.body.num);
		var num = req.body.num;
		Post.find({_id: req.params.id}).exec(function(err, question){
			// console.log(question[0].option2_votes)
			if(err){
				console.log(err)
			}
			else{
				if(num == 1){
					question[0].option1_votes++;
				
				}
				else if(num == 2){
					question[0].option2_votes++;
				
				}
				else if(num == 3){
					question[0].option3_votes++;
				
				}
				else if(num == 4){
					question[0].option4_votes++;
				
				}
				
				question[0].save(function(err){
					if(err){
						console.log(err)
					}
					else{
						// req.body.num = {};
						res.json(true)
					}
				})


			}
		})

	}


}
