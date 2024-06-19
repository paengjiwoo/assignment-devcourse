# 11주차_Day2
TypeScript 입문

# 수행 내용
- 리터럴 타입
- any, union 타입 / 타입 alias / 타입 가드
- Array, Tuple
- 클래스와 객체
- 접근 지정자

<br>

# 리터럴 타입
특정 값을 나타내는 타입, 해당 값이 정확히 일치해야 한다
- 코드의 가독성이 높아지고, 잘못된 값이 들어오는 것을 방지할 수 있다

## 문자열 리터럴 타입
```ts
interface Student {
  grade : 'A' | 'B' | 'C' | 'D' | 'F',
}

class FirstStudent implements Student {
    grade : 'A' | 'B' | 'C' | 'D' | 'F' = 'A';
}
// FirstStudent의 프로퍼티이기 때문에 리터럴 타입 재선언
```

## 숫자 리터럴 타입
- 문자열 리터럴 타입과 동일

## 불리언 리터럴 타입
```ts
let enrolled: true;
enrolled = false; // 에러 발생, true만 할당 가능
```

## 객체 리터럴 타입
- 프로퍼티 값이 모두 일치해야 한다
```ts
let student { name: 'jiwoo', message: 'hello'};
student = { name: 'paeng', message: 'hello'}; // 에러
```

## 타입 별칭
```ts
type Grades = 'A' | 'B' | 'C' | 'D' | 'F';
let stdGrades: Grades;
stdGrades = 'E' // 에러
```

<br>

# any 타입
타입을 체크하지 않아, 어떠한 타입에서도 사용 가능 <br>
타입을 지정할 수 없는 제한적인 경우에 사용
- 타입스크립트의 사용 목적은 타입에 관한 정보를 전달하여 개발자의 의도를 명확하게 전달하고, 컴파일 시 유지보수를 원활히 하기 위함이므로 any 타입은 제한적으로 사용하는 것이 좋다
```ts
let anyVal : any = 100;
anyVal = '300';
```

<br>

# 유니온 타입
제한된 타입을 동시에 지정하고 싶을 때 사용
```ts
let anyVal : number | string = 100;
anyVal = '300';
```

<br>

# 타입 alias
type 키워드를 사용해 타입에 이름을 설정
```ts
type Name = string;
let name: Name = 'Julie';
```

<br>

# 타입 가드
typeof 연산자를 사용하여 타입 검증을 수행
```ts
type val = string | number;
let name: string;

function setVal(arg: string | number) {
  if (typeof arg === number) {
    name = 0;
  } else {
    name = arg
  };
}
```

<br>

# Array & Tuple
## Array
- 길이가 가변적이고, 동일한 타입의 요소로 구성
```ts
let arr : number[] = [1, 2, 3, 4, 5];

// 배열에 유니온 타입 사용
let mixedArr : (number | string)[] = [1, 'two', 3, 'four'];

// 읽기 전용 배열 (수정 불가)
let readOnlyArray : ReadonlyArray<number | string> = [1, 'two', 3, 'four'];
```

## Tuple
- 길이가 정해져있고, 각 요소의 타입이 각각 정해져 있다
js에는 없고 ts에만 있는 타입
```ts
let tuple : [number, string, boolean] = [1, 'two', true];
```

<br>

# 클래스와 객체
클래스는 객체의 뼈대(설계도), 객체는 클래스의 실체

## 생성자
- 선언된 멤버 변수들을 초기화
typescript에서는 `constructor`로 생성

```ts
class Dog {
  dogName : string;
  age : number;
  species : string;

  constructor(dogName: string, age: number, species: string) {
    this.dogName = dogName;
    this.age = age;
    this.species = species;
  }

  getDog(): void {
    console.log(`${this.dogName}, ${this.age}, ${this.species}`);
  }
}

// Dog는 클래스, dog1은 객체
let dog1 = new Dog('토비', 2, '푸들');
dog1.getDog();
```

- 중복되는 멤버 변수 선언과 생성자 매개변수 전달 및 초기화를 간결하게 나타낼 수 있다
```ts
constructor(
  // 암묵적으로 클래스의 멤버 변수로 선언된다, 전달 인자로도 사용된다
  private _dogName: string, 
  private age: number, 
  private species: string) {
    
}
```
- 해당 방식으로 클래스의 멤버 변수로 선언함과 동시에, 생성자 매개 변수로 사용하여 초기화를 진행할 수 있다

## 

<br>

# 접근 지정자
public, private, protected
- private 프로퍼티는 _(언더바)를 프로퍼티 이름 앞에 붙여 표시

## getter & setter
```ts
class Dog {
  private _dogName: string

  get dogName() {
    return this._dogName;
  }

  set dogName(val: string) {
    this._dogName = val;
  }
}
```