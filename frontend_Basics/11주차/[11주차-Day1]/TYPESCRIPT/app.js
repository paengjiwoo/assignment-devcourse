var gradeType;
(function (gradeType) {
    gradeType["A"] = "A";
    gradeType["B"] = "B";
    gradeType["C"] = "C";
    gradeType["D"] = "D";
    gradeType["F"] = "F";
})(gradeType || (gradeType = {}));
var FirstStudent = /** @class */ (function () {
    function FirstStudent() {
        this.id = 17;
        this.name = 'jiwoo';
        this.age = 26;
        this.grade = gradeType.A;
        this.enrolled = true;
    }
    // setName 메서드 오버라이딩
    FirstStudent.prototype.setName = function (name) {
        this.name = name;
        console.log('이름 설정 : ' + this.name);
    };
    return FirstStudent;
}());
var firstInstance = new FirstStudent();
firstInstance.setName('팽지우');
function getStd(id, message) {
    return {
        id: id,
        name: 'jiwoo',
        age: 26,
        grade: gradeType.A,
        enrolled: true
    };
}
function setStd(student) {
    console.log(student);
}
setStd({
    id: 2,
    name: 'paeng',
    age: 25,
    grade: gradeType.A,
    enrolled: true
});
