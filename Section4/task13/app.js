var app = angular.module('myApp', []);

app.controller('myCtrl',['$scope',function($scope) {
    $scope.counter = 0;
    $scope.count = function () {
        $scope.counter += 1;
    };

}]);

