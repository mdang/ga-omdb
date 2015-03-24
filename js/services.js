var omdbServices = angular.module('omdbServices', ['ngResource']);

omdbServices.factory('AutoCompleteService', ["$http", function($http) {
    return {
        search: function(query) {
            return $http.get('http://www.omdbapi.com/?s=' + query).then(function(response) {
                console.log(response);

                return response.data.Search;
            });
        }
    };
}]);
