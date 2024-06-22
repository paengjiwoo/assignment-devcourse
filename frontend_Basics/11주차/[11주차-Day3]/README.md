# 11주차_Day3
React 입문

# 수행 내용
- React 프로젝트 시작
- jsx 문법
  - index.tsx & App.tsx 동작 구조
  - css 적용
  
<br>

# React
SPA(싱글 페이지 어플리케이션) 및 모바일 어플리케이션 개발 가능 <br>

## React의 동작 원리
> 초기 렌더링 → 가상 DOM 변경 → 재조정 → 실제 DOM 업데이트
### 초기 렌더링
컴포넌트 내부에서 렌더 함수를 이용해 처음 렌더링되어 화면을 보여주는 과정

### 가상 DOM 변경
변화가 생겼을 때 전체를 곧바로 변화 시키지 않고, 변화된 부분의 차이를 연산해 DOM 트리 변경 (Partial rendering)

### 재조정
[재조정(Reconciliation)](https://ko.legacy.reactjs.org/docs/reconciliation.html)

### 가상DOM
[React Virtual DOM](https://velog.io/@zaman17/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B3%B5%EC%8B%9D%EB%AC%B8%EC%84%9C-%EC%9D%BD%EA%B8%B0-React-Virtual-DOM)

<br>

# React 프로젝트 시작
- React 프로젝트 시작 명령어
```
npx create-react-app my-app
```

- React TypeScript 프로젝트 시작 명령어
```
npx create-react-app my-todolist --template typescript
```

<br>

# React 언어 개요
```ts
{/* 
  작성자 : 팽지우
  작성일 : 2024.06.19
  내용 : React 프로젝트 생성
*/}

function App() {
  let message : string = '테스트';
  const style = {
    // camelcase로 사용
    color: 'white',
    fontSize: '40px',
    fontWeight: 'bold'
  }

  return (
    <div className="App">
      <header className="container">
        {/* 주석을 작성합니다 */}
        <br />
        <div style={style} >{message}!!</div>
      </header>
    </div>
  );
}
```

- 반드시 컴포넌트 return 내용을 **부모 요소**로 감싸서 사용!
- 스타일 적용
  1. className, id를 지정해 css style 설정
  2. html 태그 내부에서 style 직접 작성해 사용 (인라인 스타일링)
- **변수**를 선언해 html 태그 content로 사용 가능
- 렌더링 시 표현될 내용을 **조건 또는 삼항연산자**를 통해 표현 가능
- 시작한 태그는 반드시 닫는 태그와 함께 작성 (self closing)
- 주석은 `{/* content */}` 의 형태로 작성