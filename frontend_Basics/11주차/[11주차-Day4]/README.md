# 11주차_Day4
React 기본

# 수행 내용
- 컴포넌트 (클래스형 / 함수형 (16버전 이후로 사용 권장)) 만들기
- state 사용
- 예제 : todolist 생성
  - 할일 목록 `todos` 생성
  - 체크박스 생성
  - react-bootstrap 활용 [bootstrap](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
  - 스프레드 연산자를 활용한 새 데이터 추가
  - todo 삭제 구현
  - todo 상세 정보 보기 위한 modal 구현 중
- 예제 : 시계 만들기
  - 타이머 구현
  - 1초마다 갱신되는 시계 구현

<br>

# 컴포넌트

## 클래스형 컴포넌트
```tsx
import { Component } from 'react';

class ClassCom extends Component {
  render() {
    return (
      <div>클래스형 컴포넌트</div>
    )
  }
}

export default ClassCom;
```
`Component`를 상속하고, `render()` 함수를 이용해 화면에 표시할 내용을 작성한다. 

<br>

> jsx(tsx) 컴포넌트 이름은 반드시 PascalCase로 작성해야 한다!
### Q
`<classCom />` 의 형태로 상속해 사용해 오류 발생!

### A
jsx는 컴포넌트 이름 첫글자를 보고 대문자인 경우 사용자 정의 컴포넌트로 인식, 소문자로 시작하는 경우 기본 태그로 인식하기 때문에 오류가 발생한다.
따라서, `<classCom />`과 같은 방식으로 작성하면 React가 해당 태그를 기본 태그로 처리하려해 오류가 발생한다!

<br>

# Hook
React 16.8 버전에서 hook이 도입되며, 클래스형 컴포넌트에서만 가능하던 상태 관리가 함수형 컴포넌트에서도 가능해졌다

## useState
```tsx
import React, { useState } from 'react';

// 객체의 구조를 잡는 역할이 아닌, 각 타입을 지정하는 역할이므로 interface 대신 type 사용
type Todo = {
  id : number;
  text : string;
  isChecked : boolean;
};

const TodoList : React.FC = () => {

  // 구조 분해 할당 → (객체, 함수 모두 가능)
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "공부하기",
      isChecked: true
    },
    {
      id: 2,
      text: "밥먹기",
      isChecked: false
    }
  ]);

  return (
    <div>
      <ul className="board">
        { todos.map((todo, idx) => ( <li key={idx}>{todo.text}</li> )) }
      </ul>
    </div>
  )
}

export default TodoList;
```
- 구조분해 할당 방식으로 작성
- 각 엘리먼트 생성시, 데이터 핸들링울 위해 엘리먼트별 고유한 key 값을 설정한다

<br>

# 스프레드 연산자 ...
state가 array 또는 object인 경우, 스프레드 연산자(...)를 활용해 현재 코드를 확장 및 개선할 수 있다
- spread 문법 : 배열의 새로운 사본을 만들어 기존의 배열과 독립된 새로운 메모리 공간에 저장
- spread 연산자를 사용하지 않고 데이터를 추가할 경우, 원본을 훼손 할 수 있어 spread 연산자를 사용해 새로운 사본 생성

```ts
let a = [1, 2, 3];

// shallow copy
let b = a;
console.log(a === b) // true

// deep copy
let c = [...a]
console.log(a === c) //false
```