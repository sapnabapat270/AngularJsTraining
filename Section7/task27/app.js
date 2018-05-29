var app = angular.module('myApp', ['ngRoute']);



app.directive("usePanel",function () {
   return{
       restrict:'AECM',
       template:`<div>
        <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
        </div>
        <div class="alert alert-warning" role="alert">
            This is a warning alert—check it out!
         </div>
         <div class="alert alert-info" role="alert">
            This is a info alert—check it out!
            </div></div>`,
       replace:false
   }
});


app.controller('home',['$scope',function($scope) {

}]);


