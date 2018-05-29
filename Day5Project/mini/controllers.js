studentApp.controller('studentsController',['$scope','$location','$rootScope','studentService',function ($scope,$location,$rootScope,studentService) {
        $scope.students=studentService.listStudents();

        $scope.addStudent=function () {
            $location.path('/student');
        }

    $scope.editStudent=function (studentId) {
        $location.path('/student/'+studentId);
    }
    $scope.deleteStudent=function (studentId) {

        var txt;
        var r = confirm("Are you sure you want to delete the student?");
        if (r == true) {
            $scope.message=studentService.deleteStudent(studentId);
            $location.path('/');
        }
    }


}]);

studentApp.controller('studentController',['$scope','$location','$rootScope','$routeParams','studentService',function ($scope,$location,$rootScope,$routeParams,studentService) {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("datefield").setAttribute("max", today);

    $scope.qualifications = ['Graduate','HSC','SSC'];
    $scope.hobbies = [{
        HobbyId: 1,
        Name: 'Football',
        Selected: false
    }, {
        HobbyId: 2,
        Name: 'Basketball',
        Selected: false
    }, {
        HobbyId: 3,
        Name: 'Badminton',
        Selected: false
    }];
    $scope.GetValue = function () {
        var hobbies=[];
        for (var i = 0; i < $scope.hobbies.length; i++) {
            if ($scope.hobbies[i].Selected) {
                hobbies.push($scope.hobbies[i].Name);
            }
        }
        if(hobbies.length){
            return hobbies.toString();
        }
        return "No Hobbies";
    }

    $scope.SetValue=function (hobby) {
        var hobbyList=hobby.split(',');
        for(var i=0; i<$scope.hobbies.length;i++){
            if(hobbyList.indexOf($scope.hobbies[i].Name)>-1){
                $scope.hobbies[i].Selected=true;
            }else{
                $scope.hobbies[i].Selected=false;
            }
        }
    }
    $scope.student={};
    $scope.student.gender="Male";
    $scope.students=studentService.listStudents();
    $scope.studentId=$routeParams.studentId;
    if($scope.studentId>0){
        for(var i=0; i<$scope.students.length;i++){
            if($scope.students[i].id==$scope.studentId){
                $scope.student=$scope.students[i];
                $scope.SetValue($scope.student.hobby);
            }
        }
    }
    $scope.addStudent=function () {
        $scope.student.hobby=$scope.GetValue();
        if($scope.student.id>0){
            $scope.message=studentService.editStudent($scope.student);
        }else{
            if($scope.students.length>0){
                $scope.student.id=$scope.students[$scope.students.length-1].id+1;
            }else{
                $scope.student.id=1;

            }
            $scope.message=studentService.addStudent($scope.student);
        }
        $location.path('/');
    }

    $scope.backToStudentList=function () {
        $location.path('/');
    }

}]);

