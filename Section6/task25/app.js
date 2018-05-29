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

app.controller('home',['$scope','$log',function($scope,$log) {

    $scope.title="This is Home Page";
    $scope.home="Scope from home";
    $log.home="Property fro home";
    $log.log($log);
    $log.log($scope);

}]);


app.controller('aboutUs',['$scope','$log',function($scope,$log) {

    $scope.title="This is About us Page";
    $scope.aboutUs="Scope from about us";
    $log.aboutUs="Property fro about us";
    $log.log($log);
    $log.log($scope);


}]);
