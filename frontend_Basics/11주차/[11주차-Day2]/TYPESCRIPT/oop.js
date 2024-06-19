// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메서드
var Dog = /** @class */ (function () {
    function Dog(
    // 암묵적으로 클래스의 멤버 변수로 선언된다, 전달 인자로도 사용된다
    _dogName, age, species) {
        this._dogName = _dogName;
        this.age = age;
        this.species = species;
    }
    Object.defineProperty(Dog.prototype, "dogName", {
        get: function () {
            return this._dogName;
        },
        set: function (val) {
            this._dogName = val;
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.getDog = function () {
        console.log("".concat(this._dogName, ", ").concat(this.age, ", ").concat(this.species));
    };
    return Dog;
}());
// Dog는 클래스, dog1은 객체
var dog1 = new Dog('토비', 2, '푸들');
// public인 set 함수로 접근
dog1.dogName = '동동이';
dog1.getDog();
