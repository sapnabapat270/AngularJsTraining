var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope',function($scope) {
    console.log($scope);
    $scope.companyName="Jeavio";
    $scope.address="4th Floor Siddharth Complex";
    $scope.getCompany=function(){
        return"hi";

    }
    console.log($scope);
    $scope.getCompany();
}]);

