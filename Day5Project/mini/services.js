studentApp.service('studentService',['$rootScope',function ($rootScope) {
    $rootScope.students=[];
    this.addStudent=function (student) {
                $rootScope.students.push(student);
                console.log($rootScope.students);
                return "Student added sucessfully.";
    };

    this.editStudent=function (student) {
        for(var i=0; i<$rootScope.students.length;i++){
            if($rootScope.students[i].id==student.id){
                console.log("in if");
                console.log($rootScope.students[i]);
                $rootScope.students[i]=student;
                console.log($rootScope.students[i]);
            }
        }
        console.log($rootScope.students);
        return "Student info updated sucessfully.";
    };

    this.listStudents=function () {
        /*var studentList=$rootScope.students;
        for(var i=0; i<studentList.length;i++){
            var today = new Date(studentList[i].bday);
            var dd = today.getDate();
            var mm = today.getMonth()+1;
            var yyyy = today.getFullYear();
            studentList[i].bday=dd+"/"+mm+"/"+yyyy;
        }
        return studentList;*/

        return $rootScope.students;
    };

    this.deleteStudent=function (studentId) {
        for(var i=0; i<$rootScope.students.length;i++){
            if($rootScope.students[i].id==studentId){
                $rootScope.students.splice(i,1);
            }
        }
        return "Student deleted successfully";
    };
}]);




