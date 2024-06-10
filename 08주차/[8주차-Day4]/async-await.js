// promise 객체를 좀 더 쉽고 편하게 사용할 수 있는 문법

// async 함수
// promise를 반환하는 객체
// function () {} 일반 함수
// async function () {} async 함수


async function comment() {
  return "비동기 처리는 재미있어!";
  // promise 객체를 return
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

// async의 역할 1
// promise 객체 return

// ---

// await
// async 함수 안에서만 동작
// Promise.then() 메서드를 좀 더 편하게 사용할 수 있는 방법
// promise 객체를 기다려주는 동작을 의미하는 키워드

async function test() {
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("완료!"), 3000);
  });

  let result = await promise;
  console.log(result);
};

test();

// async의 역할 2
// proise 객체 실행을 기다려주는 공간을 제공 역할