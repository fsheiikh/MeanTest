myApp.controller('UsersController', function(UserFactory ,$location){
	var self = this;
	this.users;
	this.loggedin;

	this.index = function(){
		UserFactory.index(function(data){
			self.users = data;
			// console.log(self.users);
			self.newUser ={};
			
			self.self();

		})
	}

	this.create = function(input){
		UserFactory.create(input, function(data){
			
			self.newUser = {};
		})
	}

	this.logout = function(){

		self.loggedin = {};
	}

	this.self = function(){

		self.loggedin = UserFactory.user;
	}

	

	this.index();
})


myApp.controller('PostsController', function(PostFactory, UserFactory, $routeParams, $location){
	var self = this;
	this.posts; 
	this.each;
	this.validation;

	this.index = function(){
		PostFactory.index(function(data){ 
			// console.log(data)
			self.posts = data;
			if(self.newPost){
				$location.url('/userpage');
			}
			self.newPost = {};

		})
	}

	this.create = function(input){
		// console.log(UserFactory.user)
		input._userid= UserFactory.user._id;
		input._user= UserFactory.user.name;
		input.moment= moment().format("MMM Do YY"); 

		 PostFactory.create(input, self.index, function(errors){

		 	console.log(errors);
		 	self.validation = errors;

		 });
		 	
		}

	this.remove = function(id){

		PostFactory.remove(id, self.index);
	}

	this.show = function(id){
		
		PostFactory.show(id, function(data){
			self.each = data;
			console.log(self.each)
			
		});
	}

	this.vote = function(num){
		var num = {"num" : num}
    	var id = $routeParams.id;
		PostFactory.update(id, num, self.show, this.index);
	}

	this.show($routeParams.id);

	this.index();
	


})

















