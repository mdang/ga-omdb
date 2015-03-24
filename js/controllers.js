var omdbControllers = angular.module('omdbControllers', []);

omdbControllers.controller('ListCtrl', function($scope, $http) {
	
	/*
	$http.get('http://www.omdbapi.com/?s=shrek').success(function(data) {
    console.log('data: ', data.Search);
    $scope.movies = data.Search;
  });
*/
});

omdbControllers.controller('DetailCtrl', function($scope, $http, $routeParams) {
	$http.get('http://www.omdbapi.com/?i=' + $routeParams.movieId).success(function(data) {
    console.log('movie: ', data);
	  $scope.movie = data;
  });
});




