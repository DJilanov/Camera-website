'use strict';

angular.module('Header')
    .controller('HeaderCtrl', ['$scope', '$location', '$timeout',
        function ($scope, $location, $timeout) {
            // TODO refactor this
            $scope.disableAll = function () {
            	$scope.home = false;
            	$scope.cameras = false;
            	$scope.dvrs = false;
            	$scope.phones = false;
            	$scope.contact = false;
            };
            $scope.getClass = function(path) {
			    $scope.disableAll();
	        	var location = $location.$$path.indexOf(path);
	        	if(location > 0){
	        		return 'active';
	        	}
			}
		}]);