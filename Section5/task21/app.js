var app = angular.module('myApp', []);

app.controller('myCtrl1',['$scope',function($scope) {
    $scope.name="myCtrl1";
}]);

app.controller('myCtrl2',['$scope',function($scope) {
    $scope.name="myCtrl2";
}]);

app.controller('myCtrl3',['$scope',function($scope) {
    $scope.name="myCtrl3";
}]);
