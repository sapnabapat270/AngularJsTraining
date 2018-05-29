var app = angular.module('myApp', ['ngRoute']);



app.directive("usePanel",function () {
   return{
       restrict:'AECM',
       templateUrl:'directives/usePanel.html',
       replace:true
   }
});


app.controller('home',['$scope',function($scope) {

}]);


