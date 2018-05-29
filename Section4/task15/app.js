var app = angular.module('myApp', []);

app.controller('myCtrl',['$scope',function($scope) {

    $scope.colorList=[{color:'red'},{color:'blue'},{color:'green'},{color:'yellow'}];
}]);

