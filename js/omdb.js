angular.module('omdb', ['ngRoute'])
 
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'HomeCtrl',
      templateUrl:'/templates/home.html'
    })
    .when('/movie/:movieId', {
      controller:'DetailCtrl',
      templateUrl:'/templates/detail.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})

.controller('HomeCtrl', function($scope) {

});