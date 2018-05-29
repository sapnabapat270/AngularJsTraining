var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope',function($scope) {
    console.log($scope);

    $scope.searchEmployee=function (firstName,lastName,post,salary,$scope) {
        return "Adam Smith";
    }

    console.log(angular.injector().annotate($scope.searchEmployee));
}]);

