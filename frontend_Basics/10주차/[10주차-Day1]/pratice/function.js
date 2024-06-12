// --- 일급 객체의 특징 ---
// 1. 함수의 실제 매개변수가 될 수 있다
// 2. 함수의 반환값이 될 수 있음

function func1(arg) {
  return arg;
};

function func2() {
  console.log('argument1')
};

func1(func2)();

// 3. 할당명령문의 대상이 될 수 있다 (변수 할당)
// 4. 동일비교의 대상이 될 수 있다 (값으로 표현 가능)

const func3 = function (arg) {
  return arg;
};

console.log(func3(3));


// --- 매개변수 ---
function func4(arg, ...rest) {
  // rest parameter
  console.log(rest);

  // arguments 객체
  console.log(arguments);
};

func4(1, 2, 3, 4, 5);


// --- 함수 생성 ---
// 함수 선언문
function func5() {
  console.log('함수 선언문');
};

// 함수 표현식
const func6 = function () {
  console.log('함수 표현식');
};

// function 생성자 함수
const func7 = new Function('a', 'b', 'return console.log(a + b)');
func7(2, 3);

// 화살표 함수 표현식
const func8 = (arg) => {
  console.log('화살표 함수 표현식')
};


// --- 함수 실행 ---
// 1. 즉시 실행 함수
(function IIFE() {
  console.log('즉시 실행 함수');
})();

// 2. 재귀 함수
function func9(arg) {
  if (arg > 3) return;

  func9(++arg);
};
func9(0);

// 3. 중첩 함수 / 내부 함수
function func10(arg) {
  function func11() {
    console.log(arg);
  };
  func11();
};
func10('내부 함수')

// 4. 콜백 함수
function func12(arg) {
  arg();
};

func12(() => {
  console.log('콜백 함수');
});
