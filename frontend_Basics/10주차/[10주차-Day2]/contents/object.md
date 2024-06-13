# 객체
Object <br>
**속성**을 가진 독립적인 객체 (entity)
- mutable
- 참조 형태
- 자바스크립트는 객체 기반의 프로그래밍 언어로, js를 구성하는 대부분이 객체

## 속성
property <br>
- 속성은 키와 값 사이의 연결관계
- 객체의 속성은 js의 변수와 유사하고, 객체에 속해있음
- method(객체에 속해있는 함수)

### 속성 나열
1. `for...in`
  - 모든 열거 가능한 속성 순회 (객체 프로토타입 체인의 속성까지)
  ```js
  const obj = {
    a : 1,
    b : 2
  };
  function Obj(name) {
    this.name = name;
  };
  Obj.prototype = obj;

  // 이 경우 for...in 으로 key를 조회할 경우, prototype 체인의 속성까지 열거된다
  for (const key of Obj) {
    console.log(key);  // name, a, b
  }
  ```
2. `Object.keys(객체)`
  - 객체의 열거 가능한 속성 이름을 배열 반환
3. `Object.getOwnPropertyNames(객체)`
  - 객체 자신만의 모든 속성을 배열 반환
<br>

## 객체 생성 방법
### 리터럴 표기
```js
const obj = {
  name : 'paeng'
  // 식별자 : 표현식
}
```

### 생성자 함수
new 키워드와 함께 객체를 생성하고 초기화하는 함수 <br>
- 생성자 함수를 정의한 후, new 연산자를 활용하여 객체 인스턴스 생성
```js
function Person(name, age) {
  this.name = name,
  this.age = age
};
new obj('paeng', 26)
```
- 생성자 함수는 대문자로 시작해 일반 함수와 구분
- this 키워드로 속성 정의해, 생성될 인스턴스 가리킴

### Object.create
js 내부 빌트인 객체 Object를 활용해 생성자 함수처럼 동일한 속성값을 갖는 객체 생성 가능
```js
const Person = {
  name: 'joy',
  age: 23
};

const Paeng = Object.create(Person);
Paeng.name = 'paeng'
Paeng.age = 26
```
<br>

## 객체 비교
- 자기 자신과의 비교에서만 true (속성이 같아서 같은것 x)

## 객체 참조
- 정의된 객체를 다른 변수에 그대로 할당할 경우, 동일한 메모리 주소로 할당
- 두 객체 중 하나를 수정하면, 두 변수가 참조하고 있는 하나의 동일한 메모리 주소의 객체가 수정되어 2가지 객체 모두 변경사항에 영향 받으므로 객체 복사 필요
### 얕은 복사
복사된 객체의 속성 중 하나라도 같은 값을 참조하는 경우
1. `Object.assign({}, 복사할 객체)`
2. spread 연산자 `{ ... 복사할 객체 }`
```js
const food = {
  lemon: 'sour',
  chocolate: 'sweet',
  month: {
    March: 3,
    April: 4
  }
}

const obj1 = Object.assign({}, food);
const obj2 = { ...food }

obj2.month.March = 1

console.log(obj1)
// { lemon: 'sour', chocolate: 'sweet', month: { March: 1, April: 4 } }
console.log(obj2)
// { lemon: 'sour', chocolate: 'sweet', month: { March: 1, April: 4 } }
```
### 깊은 복사
복사된 객체 속성 모두 같은 참조를 하고 있는 속성이 없는 경우
1. `cloneDeep` (lodash 라이브러리를 통해 재귀순회)
2. `JSON.stringify` (객체 → 문자열(참조 끊어짐) → 객체) / 연산 부담

<br>

# Number 객체
숫자를 표현하는 원시 래퍼 빌트인 객체
- Static 속성 : `MAX_VALUE` / `MAX_SAFE_INTEGER` / `NAN` ...
- 메서드 : `isNaN` / `isFinite` / `isInteger` / `parseInt` / `parseFloat` ...
- 속성이 숫자를 가지고 있으면, Number 객체 인스턴스 생성없이 Number 인스턴스 속성과 메서드 사용 가능

# Math 객체
- 생성자 사용 x
- 수학적 연산과 작업을 위한 메서드 제공

# Date 객체
1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 나타낸 것
- 인자없이 Date 호출할 경우 현재 표준시 가져옴

## UTC 
국제적인 표준 시간의 기준으로 쓰이는 시각 <br>
- 그리니치 평균시(GMT)에 기반
- 날짜 표현 방식 표준화(ISO 8601) : YYYY-MM-SS**T**hh:mm:ss**Z**