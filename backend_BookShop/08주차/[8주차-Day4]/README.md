# 8주차_Day4
Node.js 비동기 처리

# 진행 사항
- 비동기 처리 방식(promise, async/await) 학습
- Node.js의 특징 논 블로킹 !

<br>

# 비동기 처리
## 비동기
코드가 실행되면 해당 코드의 실행 완료를 기다리지 않고 다음 코드를 바로 실행함
  
## 비동기 처리
비동기가 발생할 경우 순서를 맞추어 코드를 실행하는 방법
1. 콜백 함수
2. promise (resolve, reject)
3. then & catch
4. async & await (ES2017 ver. promise)

<br>

# promise와 async/await
### promise
- 할 일 (executor)을 처리하고 나면 무조건 resolve(결과) 또는 reject(에러)를 도출
```js
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("완료!"), 3000);
});
```

- promise-chaining
```js
// .then : promise의 일이 모두 끝난 후 호출
promise.then(function(result) {
    // promise 요청이 성공할 경우 resolve를 받음
    console.log(result)
    return "진짜 진짜 완료!"
  }, function(err) {})
  .then(function(result) {
    console.log(result)
    return "끝!"
  }, function(err) {})
  .then(function(result) {
    console.log(result)
  }, function(err) {});

```

## async/await
promise 객체를 좀 더 쉽고 편하게 사용할 수 있는 문법
- async 함수
  - promise를 반환하는 객체
  - function () {} 일반 함수
  - async function () {} async 함수

### asnyc 역할 1 - promise 객체 return

```js
async function comment() {
  return "비동기 처리는 재미있어!";
  // Promise.resolve("비동기 처리는 재미있어!")로
  // return 되는 것과 동일
};

comment().then(
  function(res) {
    console.log(res);
  }, function(err) {
    console.log(err);
  }
);
```

### asnyc 역할 2 - proise 객체 실행을 기다려주는(await) 공간 제공

- await
  - async 함수 안에서만 동작
  - Promise.then() 메서드를 좀 더 편하게 사용할 수 있는 방법
  - promise 객체를 기다려주는 동작을 의미하는 키워드


```js
async function test() {
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("완료!"), 3000);
  });

  let result = await promise;
  console.log(result);
};

test();
// 위의 promise 객체 예시와 동일한 결과 도출!
```

