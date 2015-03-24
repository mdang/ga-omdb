var omdbControllers = angular.module('omdbControllers', []);

omdbControllers.controller('ListCtrl', function($scope, $http) {
	$http.get('http://www.omdbapi.com/?s=shrek').success(function(data) {
    console.log('data: ', data.Search);
    $scope.movies = data.Search;
  });
});

