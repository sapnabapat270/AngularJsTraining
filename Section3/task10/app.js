var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope','$log',function($scope,$log) {

    console.log($scope);
    console.log($log);


}]);

