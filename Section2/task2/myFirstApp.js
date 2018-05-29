var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope',function($scope) {
    $scope.message = "My First JS Application";
}]);