var app = angular.module('myApp', []);

app.controller('parent1Controller',['$scope',function($scope) {
    $scope.parent1vm={};
    $scope.parent1vm.message="parent1Controller message";
}]);

app.controller('child1Controller',['$scope',function($scope) {
    $scope.child1Vm={};
    $scope.child1Vm.message="child1Controller message";
}]);



app.controller('parent2Controller',[function() {

    this.message="parent2Controller message";
}]);



app.controller('child2Controller',[function() {
    this.message="child2Controller message";
}]);