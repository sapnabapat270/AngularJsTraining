var app = angular.module('myApp',[]);

app.directive("searchResult",function () {
   return{
       restrict:'E',
       templateUrl:'directives/searchResult.html',
       replace:true,
       scope:{
          personObject:"=",
          formattedAddressFunction:"&"
       },
       link:function (scope,elements,attrs) {
                console.log('Linking...');
                console.log(elements);
                if(scope.personObject.name=="Grishma"){
                    elements.removeAttr('class');
                }
            }

       }

});


app.controller('home',['$scope',function($scope) {

    $scope.people=[{
        name:"Sapna",
        address:"New Sama",
        city:"Vadodara",
        state:"Gujarat",
        zip:"11111"
    },{
        name:"Grishma",
        address:"Raopura",
        city:"Vadodara",
        state:"Gujarat",
        zip:"2222222"
    },{
        name:"Niki",
        address:"Alkapuri",
        city:"Vadodara",
        state:"Gujarat",
        zip:"333333"
    }];


    $scope.formattedAddress=function (person) {
        return person.address+', '+person.city+', '+person.state+', '+person.zip;
    }

}]);


