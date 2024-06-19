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