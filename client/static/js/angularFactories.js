
myApp.factory('UserFactory', function($http){
	var users = {};

	users.index = function(callback) {
		$http.get('/user').success(callback);
	}

	users.create = function(input, callback) {
		$http.post('/user', input).success(function(user) {
			console.log(user);
			users.user = user;
			
			callback(user);
		});
	}


	return users;
})

myApp.factory('PostFactory', function($http){
	var posts = {};

	posts.index = function(callback){
		$http.get('/posts').success(callback);
	}

	posts.create = function(input, callback, callback2){
		$http.post('/posts', input).success(callback).error(function(output){
			console.log(output);
			errors = output;
			callback2(errors);
		})

	}

	posts.remove = function(id, callback){

		$http.delete('/posts/' + id).success(callback);
	}

	posts.show = function(id, callback) {

		$http.get('/posts/'+id).success(callback);
	}

	posts.update =function(id, num, callback, callback2){
		console.log(id, num)
		$http.put('/posts/update/'+id, num).success(function(){
			callback(id);
			callback2;
		});
	}
	return posts;

})
