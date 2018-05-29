var app = angular.module('myApp', []);

app.controller('myCtrl',['$scope','$log','$timeout',function($scope,$log,$timeout) {
    
    $scope.$watch('address',function (newValue,oldValue) {
        $log.info("Address changed");
        $log.info(oldValue);
        $log.info(newValue);
    })

    setTimeout(function(){
        $scope.$apply(function () {
            $scope.address="Updated value from timeout service";
            console.log("Scope changed");
        })
    },3000);

}]);

