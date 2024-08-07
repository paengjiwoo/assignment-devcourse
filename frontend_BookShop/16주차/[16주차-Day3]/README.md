# 16주차_Day3
bookshop 프로젝트 frontend: 중간 회고

# 진행 내용
- alias 적용해 절대 경로로 변경 
  - [CRACO](https://craco.js.org/)
- 중복 코드 제거
- 스니펫 만들기
- useAuth 훅 만들기
- react-query 적용
- 다양한 UI 경험

<br>

# 스니펫 만들기
템플릿 제공

1. install VSCODE extension **Snippet Generator**
<br>

2. 스니펫으로 추가하고자 하는 템플릿 만들기
```tsx
import styled from "styled-components";

function $1() {
  return (
    <$1Style>
      <h1>$1</h1>
    </$1Style>
  );
}

const $1Style = styled.div`

`;

export default $1;
```
- $1, $2... 의 순서에 따라, 스니펫으로 코드 생성한 이후 커서 이동
<br>

3. Generate snippet 명령을 활용해, snippet의 호출 명과 설명을 작성해 snippet으로 추가

