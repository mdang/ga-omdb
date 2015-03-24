var omdbControllers = angular.module('omdbControllers', []);

omdbControllers.controller('ListCtrl', function($scope, $http) {
	
});

omdbControllers.controller('DetailCtrl', function($scope, $http, $routeParams) {
	$http.get('http://www.omdbapi.com/?i=' + $routeParams.movieId).success(function(data) {
    console.log('Movie: ', data);
	  $scope.movie = data;
  });
});
