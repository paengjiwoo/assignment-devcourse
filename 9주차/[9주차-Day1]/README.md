# 9주차_Day1
Node.js BookShop jwt 토큰 전달

# 진행 사항
- jwt 토큰 발행 및 검증 실습
- 로그인 시 받은 token을 req.header "Authorization"으로 전달해 유저 확인

- JWT 추가 구현
  - jwt 검증 로직 모듈로 구현
  - 좋아요 추가 / 삭제 api
  - 장바구니 담기 / 잠바구니 조회 / 장바구니 삭제 api

- jwt expired 예외 처리 (try ... catch)
  - TokenExpiredError : 토큰이 만료된 경우
  - JsonWebTokenError : 토큰에 문제가 있는 경우

<br>

# try ... catch
프로그램에서 발생하는 모든 에러를 처리하는 문법

```js
try {
  function() { 실행하고자 하는 코드 }
} catch (err) {
  // 에러 처리
};
```

- `try` 실행 도중, 에러가 발생하면 → 그 즉시 멈추고 `catch`로 빠져나가 에러로 잡힌다 
- `catch`로는 js의 내장 에러 객체가 전달된다

<br>

# throw 연산자
에러를 발생시키는 연산자 <br>
**`throw` 에러 객체**

```js
try {
  function() { 실행하고자 하는 코드 }

  // 에러 객체를 전달하고 해당 에러 위치에서 코드 종료
  throw new SyntaxError("해당 위치에 에러가 있습니다")

} catch (err) {
  // 에러 처리
};
```