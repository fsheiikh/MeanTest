var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider

	
	.when('/login', {
		templateUrl: "/partials/login.html"
	})
	.when('/userpage', {
		templateUrl: "/partials/userpage.html"
	})
	.when('/userpage/view/:id', {
		templateUrl: "/partials/postpage.html",
	})
	.when('/create', {
		templateUrl: "/partials/pollpage.html"
	})


	.otherwise({
		redirectTo: "/"
	})

})