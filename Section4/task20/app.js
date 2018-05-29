var app = angular.module('myApp', []);

app.controller('myCtrl',['$scope','$http',function($scope,$http) {

    $http.get('https://www.w3schools.com/angular/customers_mysql.php')
        .success(function(response) {
            $scope.records = response.records;
        });

}]);

