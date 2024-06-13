# 문
statement <br>
프로그램을 구성하는 최소 실행 단위
- 선언문, 할당문, 제어문, 반복문, 블럭문 등 (명령문)

<br>

# 조건문
### if ... else 문
- 중첩 if문 (Nested Conditional) 사용 가능 - 지양
- 빠른 종료로 연결되는 조건문부터 작성하는 Guard Clauses 형태 권장하기도

### switch 문
switch에 명시된 표현식 평가 후, 평가 값과 case 라벨 값 비교하여 일치하는 case의 명령문 실행 → 일치하는 case문이 없는 경우 default 명령문 실행
```js
switch (표현식) {
  case 라벨:
    return ...
  default:
    return ...
  // default문은 라벨 없이 작성
}
```

<br>

# 반복문
## 조건부 loop
conditional loop

### while문
시작할때 조건을 평가 <br>

### do
본문을 먼저 실행하고 마지막에 조건을 평가 <br>
```js
do {
  ...
} while ( 조건 );
```

<br>

## for loop
특정 부분의 코드가 반복적으로 수행

### [초기화 - 조건식 - 증강문] 형식

### collection loop (Foreach loop)
- 명시적으로 카운터(루프 변수)를 관리 x
- `for ... of`
  - 반복 가능한 객체(**iterator**)를 통해 반복 루프 만듦
  - iterator : Array, Set, String ...
- `for ... in`
  - 객체의 열거속성(enumerable)을 통해 지정된 변수 반복
  ```js
    for (let key in Object) { ... }
  ```

<br>

## break문 & continue 문
### break문
제어흐름 종류 중 프로그램 실행 중단 종류 <br>
- 가장 가까운 반복문, switch문 종료 후 다음 명령어로 넘어감
### continue문
제어 흐름 종류 중 loop를 종료하고 다음 loop를 다시 시작하기 위해 사용