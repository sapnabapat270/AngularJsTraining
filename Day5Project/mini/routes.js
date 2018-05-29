studentApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'pages/students.html',
            controller:'studentsController'
        })
        .when('/student',{
            templateUrl:'pages/student.html',
            controller:'studentController'
        })
        .when('/student/:studentId',{
            templateUrl:'pages/student.html',
            controller:'studentController'
        })
})
