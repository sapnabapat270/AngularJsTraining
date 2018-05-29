var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.countMouseEnter = 0;
    $scope.countMouseLeave = 0;

    $scope.mouseLeaveEvent = function () {

        $scope.countMouseLeave = $scope.countMouseLeave + 1;

    }

    $scope.mouseEnterEvent = function () {

        $scope.countMouseEnter = $scope.countMouseEnter + 1;

    }
}]);