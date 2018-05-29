var app = angular.module('myApp', []);

app.controller('myCtrl',['$scope','$filter','$window',function($scope,$filter,$window) {

    $scope.handle="";
    $scope.lowercasehandle=function () {
        return $filter('lowercase')($scope.handle);
    }
    $scope.redirectTo=function () {
        $window.location.href="https://www.facebook.com/"+$scope.handle;
    }

}]);

