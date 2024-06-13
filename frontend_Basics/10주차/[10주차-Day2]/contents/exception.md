# 예외 상황
런타임 때 발생할 수 있는 의도치 않은 상황

# 예외의 종류
## ECMAScript Error
자바스크립트 언어에서 발생하는 Error Type
- RangeError / ReferenceError / SyntaxError / TypeError

## DOMException
Web API 레벨에서 발생하는 Error Type
- NetworkError / AbortError (작업 중단) / TimeoutError

<br>

# throw문 & Error 객체
## throw문
예외를 발생시키기 위하여 사용 <br>
1. 현재 함수 실행 중지
2. 에러 객체와 함께 에러가 throw
3. catch 블록이 있으면, catch 블록으로 전달 or 없으면, 프로그램 종료
```js
const foo = () => {
  throw '이 이후의 명령문은 실행되지 않는다!';
};
```
## Error 객체
- 사용자가 직접 Error 객체를 정의하여 사용 가능 (`new Error('message')`)
- Error 객체의 속성 : `Error.message`, `Error.name`

# try...catch문
## 에러 catch
예외 발생 시,
1. 현재 함수 실행 중지
2. 에러 객체와 함께 에러가 throw
3. catch 블록이 있으면, catch 블록으로 전달 or 없으면, 프로그램 종료
- 예외 처리를 담당하는 핸들러를 찾기 위해, 순서대로 콜 스택(call stack)을 거슬러 올라가 핸들링하고 있는 catch문이 있는 스택을 찾아 처리
### 콜 스택
call stack <br>
- stack 자료구조
- 자바스크립트 코드가 실행되며 생성되는 실행컨텍스트를 저장하는 자료 구조
- 함수를 호출할 때마다 스택이 쌓이고, 함수의 실행이 종료되면 콜스택에서 스택을 제거 

<br>

## try...catch
- try 블록의 명령문 중 하나가 실패하면, catch로 제어권 넘어감
- `finally` 블록은 예외상황 발생과 상관없이 실행
```js
try { ... }
catch { ... }
finally { ... };
```
- 외부 의존도가 있는 로직과 같이, 개발자가 예측하기 힘든 로직에서 `try ... catch`문을 활용해 예외처리하면 효율적