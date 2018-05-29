var app = angular.module('myApp', ['ngRoute']);



app.directive("usePanel",function () {
   return{
       restrict:'E',
       templateUrl:'directives/usePanel.html',
       replace:true,
       scope:{
           plantName:"@",
           plantPrice:"@"
       }
   }
});


app.controller('home',['$scope',function($scope) {

    $scope.plant={
        name:"Rose",
        price:"100"
    }
}]);


