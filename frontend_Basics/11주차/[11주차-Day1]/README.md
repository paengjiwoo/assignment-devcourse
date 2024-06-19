# 11주차_Day1
TypeScript 입문

# 수행 내용
- TS 개념
- TS 실행환경 설정
- 데이터 타입과 추론
- 인터페이스
- 열거형

<br>

# TypeScript
타입스크립트 = 자바스크립트 + 타입체크 <br>
타입스크립트(원시 코드) → !컴파일 → 자바스크립트(목적 코드/기계어) → 웹브라우저 <br>
- 컴파일 언어인 동시에 컴파일러

<br>

# TypeScript 실행환경 설정
## TypeScript 설치
```
npm install -g typescript
```
### [Error: EACCES: permission denied 해결 방법](https://brtech.tistory.com/124)
- 해당 설정으로 홈 경로에 global package가 설치되어 sudo 명령어 없이 install 가능
> 해당 방법으로는 정상적으로 typescript를 활용할 수 없었다

## TypeScript 파일 컴파일 진행
```
tsc app.ts (파일명)
```
해당 명령어를 통해 ts 파일을 js 파일로 컹파일

### `brew install typescript`
teminal에서 Mac용 패키지 관리자  brew를 이용해 typescript를 install 한 뒤, `tsc app.ts`가 정상 작동되었다.


## tsconfig.json 설정
```
tsc --init 
```
명령어를 통해 생성 가능

## 컴파일 자동화
```
tsc -w app.ts
```

```terminal
[12:48:15 PM] Starting compilation in watch mode...

[12:48:15 PM] Found 0 errors. Watching for file changes.
```
자동으로 ts 파일의 변화를 감지하고, 컴파일 한다

<br>

# 데이터 타입과 추론
TypeScript는 타입 추론 기능을 통해 변수 타입을 자동으로 판단 → 컴파일러가 초기에 할당된 값을 바탕으로 변수와 타입을 추론

## 데이터 타입
### 기본 데이터 타입
- number / string / boolean / null (사용자가 의도적으로 값이 없음을 나타냄) / undefined
- [underined와 null의 차이점을 설명 하세요](https://2ssue.github.io/common_questions_for_Web_Developer/docs/Javascript/13_undefined&null.html#null)


### 객체 타입
- object / array / tuple

### 특수 타입
- any (어떤 타입이든 할당 가능) / unknown (타입을 미리 알 수 없는 경우)

> 변수 선언 시, 변수 값의 타입을 명시해 변수 데이터 타입을 지정
- 데이터 타입을 지정함으로써, 변수에 대한 정확한 정보를 얻을 수 있음 안정적!

## 데이터 타입 명시
### 변수 데이터 타입 명시
```ts
let num1 : number = 1;
let course : string = 'fullstack';
let real : boolean = false;
```

### 함수 데이터 타입 명시 
매개변수, 리턴 타입 데이터 명시
```ts
function func1(a : number, b : number) : number {
  return a * b;
}
```
- 아무 값도 리턴하지 않을 경우, 리턴 타입으로 `void` 타입을 작성

<br>

# 인터페이스
사용자 정의 타입 <br>
기능의 확장이 목적이 아닌, 기능의 구현과 정의가 목적 (implements)
```ts
interface Student {
  id : number,
  name : string,
  age? : number, // ? : 선택적 프로퍼티 (생략 가능)
  grade : string,
  enrolled : boolean,
  setClass? : (clsId: number) => void;
  getClass? : () => number;
}
```
- 인터페이스는 데이터 타입으로 사용 가능 (e.g. Student 라는 타입으로 사용 가능)
- 속성값 뒤에 ?를 붙여 선택적 프로프티로 저장 가능
- 메서드도 인터페이스 내에 선언 가능 → 메서드 오버라이딩 하여 활용
```ts
class FirstStudent implements Student {
    id = 17;
    name = 'jiwoo';
    age = 26;
    grade = 'A';
    enrolled = true;

    // setName 메서드 오버라이딩
    setName(name: string): void {
        this.name = name;
        console.log('이름 설정 : ' + this.name);
    }
}

const firstInstance = new FirstStudent();
firstInstance.setName('팽지우');
```
- 실제로 화면에는 어떠한 영향도 미치지 않기 때문에, 컴파일 후에는 interface 코드가 존재하지 않는다

<br>

# 열거형
enum을 활용
```ts
enum gradeType {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F'
}

interface Student {
  grade : gradeType,
}

class FirstStudent implements Student {
    grade = gradeType.A;
}
```

