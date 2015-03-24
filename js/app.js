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
})

.directive('autocomplete', ['AutoCompleteService', function(AutoCompleteService) {
    return {
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
            elem.autocomplete({
                source: function(query, response) {
                    AutoCompleteService.search(scope.query).then(function(autocompleteResults) {
                        scope.movies = autocompleteResults;
                    });
                },
                minLength: 2
            });
        }
    };
}]);