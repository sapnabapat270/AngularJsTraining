var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'pages/home.html',
            controller:'home'

    }).when('/aboutUs',{
        templateUrl:'pages/aboutUs.html',
        controller:'aboutUs'
    }).when('/aboutUs/:num',{
        templateUrl:'pages/aboutUs.html',
        controller:'aboutUs'
    })
});

app.controller('home',['$scope',function($scope) {

    $scope.title="This is Home Page";


}]);


app.controller('aboutUs',['$scope','$routeParams',function($scope,$routeParams) {

    $scope.title="This is About us Page";
    $scope.num=$routeParams.num || "default";

}]);
