var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope','$log','$filter',function($scope,$log,$filter) {

    $scope.name='Jeavio';
    $scope.upName=$filter('uppercase')($scope.name);
    $scope.lwcase=$filter('lowercase')($scope.name);


    $log.info($scope.name);
    $log.info($scope.upName);
    $log.info($scope.lwcase);

}]);

