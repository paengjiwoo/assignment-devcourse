# 12주차_Day1
TaskApp 프로젝트 시작 & 초기 생성

# 수행 내용
- vite를 활용한 React 프로젝트 시작
- 프로젝트 구조 생성
  - components / hooks / store (reducer, slices) / types
- 컴포넌트 구조 생성
- 필요한 패키지 설치
- Redux 사용 
- 전역 스타일 생성

<br>

## 필요 패키지
- @reduxjs/toolkit
- redux : 상태관리 라이브러리
- react-redux
- clsx
- @vanilla-extract/css : ts 파일에서 css 편리하게 사용
- @vanilla-extract/css-utils
- @vanilla-extract/vite-plugin
- react-icons
- uuid : unique한 id값
- react-beautiful-dnd : 드래그앤 드랍 기능 구현

<br>

# Redux
전역 상태관리를 도와주는 라이브러리

## Flow
1. Action 객체를 Dispatch 함수로, Reducer 함수에 전달한다
2. Reducer 함수에서 type에 따라 return 되는 값이 Redux Store State에 저장된다
3. Redux Store에 새로운 값이 저장되면 React가 리렌더링 된다