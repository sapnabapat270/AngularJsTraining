var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope','$log',function($scope,$log) {

    $log.log("Hello..");
    $log.info("this is for information");
    $log.warn("this is a warning");
    $log.debug("this is too debug");
    $log.error("this is an error");
}]);

