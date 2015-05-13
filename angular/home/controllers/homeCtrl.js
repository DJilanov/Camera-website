'use strict';

angular.module('Home')
    .controller('HomeCtrl', ['$scope', '$location', '$http',
        function ($scope, $location, $http) {
        	$scope.response = null;
			$http.get('./home.json').success(function(data, status, headers, config) {
			    $scope.response = data;
			  }).
			  error(function(data, status, headers, config) {
			    alert('Error on fetching from the server');
			  });

		}]);
