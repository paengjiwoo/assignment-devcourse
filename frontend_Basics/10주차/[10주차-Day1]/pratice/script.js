// null은 type을 확인할 경우 object로 출력되고, 이는 js의 버그
const test = null
console.log(typeof test)

// 데이터 타입 symbol
const foo = {
  [Symbol.for('apple')] : 'fruit'
}
console.log(foo[Symbol.for('apple')]);

const obj = {}

const symbol1 = Symbol('foo');
obj[symbol1] = 'value1';
console.log(obj[symbol1]); // value1

// 변수 생성 실습
console.log(a);
try {
  console.log(b);
  console.log(c);
} catch {
  
}

var a = 1;
const b = 2;
let c;
