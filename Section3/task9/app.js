var app = angular.module('myApp', ['ngMessages']);
app.controller('myCtrl',['$scope',function($scope) {

    console.log($scope.countryCode);
}]);

