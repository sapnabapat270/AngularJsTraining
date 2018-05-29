var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope','$timeout',function($scope,$timeout) {

        $scope.person={
            firstName:"Sapna",
            lastName:"Bapat",
            address:"New Sama Road",
            city:"Vadodara"

        }


    $timeout(function(){
        $scope.person.city="pune";
    },3000);

}]);

