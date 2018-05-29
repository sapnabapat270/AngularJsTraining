var app = angular.module('myApp', []);

app.controller('myCtrl',['$scope','$http',function($scope,$http) {

    $http.get('ruleData.json')
        .success(function(response) {
            $scope.rules = response.rules;
        });

}]);

