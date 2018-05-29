var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope',function($scope) {
    $scope.displayEmployeeInfo=function (empId,empName) {
        console.log("empId:"+empId+" empName:"+empName);
    }
    console.log($scope.displayEmployeeInfo);
    console.log($scope.displayEmployeeInfo.toString());
}]);
