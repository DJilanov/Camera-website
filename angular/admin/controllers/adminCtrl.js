'use strict';

angular.module('Admin')
    .controller('AdminCtrl', ['$scope', '$location',
        function ($scope, $location) {

            $scope.isEditMode = false;

            // TODO refactor this
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
		}]);
