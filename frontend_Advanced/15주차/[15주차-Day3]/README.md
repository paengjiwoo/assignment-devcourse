# 15주차_Day3
book-store 프로젝트 frontend

# 진행 내용
- title 컴포넌트 생성
  - 테스트 코드 작성 : 단순하고 여러 사용자가 반복적으로 사용하는 컴포넌트 일수록 테스트 필요
- Button 컴포넌트 생성
  - 스타일 적용, 테스트 코드 작성
- Input 컴포넌트 생성
  - 스타일 적용, 테스트 코드 작성
- Header 컴포넌트 스타일 변경
- Footer 컴포넌트 생성

- dev용 logo 이미지
  - [unsplash 이미지 사용](https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%B8%94%EB%A3%A8-work-harder-%EB%84%A4%EC%98%A8-%EA%B0%84%ED%8C%90-sm3Ub_IJKQg)

<br>

# React.forwardRef
forwardRef()로 컴포넌트를 생성하면, 해당 컴포넌트는 child 컴포넌트로서 `ref`를 두번째 매개변수로 받을 수 있게 된다
```jsx
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  // ...
});
```
- 참고: [forwardRef(render)](https://react.dev/reference/react/forwardRef);

<br>

# test.ts 파일 동작 시 오류
```ts
No tests found, exiting with code 0
```
[Running Test(CRA)](https://create-react-app.dev/docs/running-tests/)
<br>

CRA의 `react-scripts test`로 테스트 코드가 동작하지 않는 상황이 발생했다.
- 여전히 오류 상황을 해결하지는 못했지만, 추후 해결 상황에 대비하여 test 코드를 작성해 놓았다.