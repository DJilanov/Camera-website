'use strict';

angular.module('Product')
    .controller('ProductCtrl', ['$scope', '$location', '$http',
        function ($scope, $location, $http) {         
        	var apiLocation = null;
        	$scope.response = null;

        	var location = $location.$$path.split('/')[2];

        	switch(location){
        		case 'cameras':
        			apiLocation = 'cameras';
        			break;
        		case 'dvrs':
        			apiLocation = 'dvrs';
        			break;
        		case 'phones':
        			apiLocation = 'phones';
        			break;
        		default:
        			apiLocation = 'home';
        			break;
        	}
        	$http.get('./' + apiLocation + '.json').success(function(data, status, headers, config) {
			    $scope.response = data;
			  }).
			  error(function(data, status, headers, config) {
			    alert('Error on fetching from the server');
			  });
		}]);
