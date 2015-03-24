angular.module('omdb', ['ngRoute', 'omdbControllers', 'omdbServices'])
 
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'/templates/list.html'
    })
    .when('/movie/:movieId', {
      controller:'DetailCtrl',
      templateUrl:'/templates/detail.html'
    })
    .otherwise({
      redirectTo:'/'
    });
});