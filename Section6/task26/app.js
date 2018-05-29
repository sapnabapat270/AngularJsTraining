var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'pages/home.html',
            controller:'home'

        }).when('/aboutUs',{
        templateUrl:'pages/aboutUs.html',
        controller:'aboutUs'
    })
});

app.service('locService',function () {
   var self=this;
   this.loc='Vadodara';
});

app.controller('home',['$scope','locService',function($scope,locService) {

    $scope.myLocation=locService.loc;
    $scope.$watch('myLocation',function () {
        locService.loc=$scope.myLocation;
    });
}]);


app.controller('aboutUs',['$scope','locService',function($scope,locService) {
    $scope.myLocation=locService.loc;
    $scope.$watch('myLocation',function () {
        locService.loc=$scope.myLocation;
    });
}]);
