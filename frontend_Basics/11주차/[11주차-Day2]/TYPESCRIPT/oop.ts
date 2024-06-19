// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메서드

class Dog {

  constructor(
    // 암묵적으로 클래스의 멤버 변수로 선언된다, 전달 인자로도 사용된다
    private _dogName: string, 
    private age: number, 
    private species: string) {
      
  }

  get dogName() {
    return this._dogName;
  }

  set dogName(val: string) {
    this._dogName = val;
  }

  getDog(): void {
    console.log(`${this._dogName}, ${this.age}, ${this.species}`);
  }
}

// Dog는 클래스, dog1은 객체
let dog1 = new Dog('토비', 2, '푸들');
// public인 set 함수로 접근
dog1.dogName = '동동이';
dog1.getDog();