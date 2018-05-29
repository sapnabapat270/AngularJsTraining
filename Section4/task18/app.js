var app = angular.module('myApp', []);

app.controller('myCtrl',['$scope','$window',function($scope,$window) {
    
    $scope.msgAlert=function () {
        $window.alert("hello.. this is an alert");
    }

}]);

