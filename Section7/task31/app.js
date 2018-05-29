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

    $scope.plants=[{
        name:"Rose",
        price:"100",
        description:"Rose desc"
    },{
        name:"Lily",
        price:"200",
        description:"Lily desc"
    },{
        name:"Jasmine",
        price:"300",
        description:"Jasmine desc"
    }];

    $scope.getPlantDetails=function(plant){
        return plant.name+', '+plant.price;
    };
}]);


