var app = angular.module('myApp',[]);

app.directive("usePanel",function () {
   return{
       restrict:'E',
       templateUrl:'directives/usePanel.html',
       replace:true,
       scope:{
          plantObject:"=",
          formattedPlantDetailsFunction:"&"
       }
   }
});


app.controller('home',['$scope',function($scope) {

    $scope.plant={
        name:"Rose",
        price:"100"
    };

    $scope.getPlantDetails=function(plant){
        return plant.name+', '+plant.price;
    };
}]);


