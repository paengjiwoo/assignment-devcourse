let promise = new Promise(function(resolve, reject) {
  // executor : promise 함수가 할 일
  // 할 일을 처리하고 나면 무조건 resolve(결과) 또는 reject(에러)를 도출
  setTimeout(() => resolve("완료!"), 3000);
});


// promise-chaining

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
