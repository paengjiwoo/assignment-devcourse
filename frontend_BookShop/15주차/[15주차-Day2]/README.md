# 15주차_Day2
book-store 프로젝트 frontend

# 진행 내용
- 레이아웃 구성
- 글로벌 스타일 
  - sanitize.css 활용
  - styled-component
- css 테마 구성
  - Context API - Theme Switcher
  - localStorage에 테마 설정 저장

<br>

# Layout 구성
## component Type
React Node ⊃ React Element ⊃ JSX Element

# global style
- 에릭마이어 [reset.css](https://meyerweb.com/eric/tools/css/reset/)
- [normalize.css](https://necolas.github.io/normalize.css/)
- [sanitize.css](https://csstools.github.io/sanitize.css/)
  - 브라우저간의 css 차이 극복

# css-in-js
1. 전역 충돌 방지
2. 스타일 의존성 관리 어려움 해결
3. 불필요한 코드, 가독성이 떨어지는 코드로 인해 발생하는 오버라이딩 해결
4. css를 압축해서 js에 sjgdma
5. 순서와 명시
6. 캡슐화
→ 관심사의 분리를 위해 (e.g. 컴포넌트별 html, css, js 유기적으로 구동)

# 테마
1. UI, UX 일관성 유지
2. 유지보수 용이
3. 확장성, 재사용성 : 추가 용이, 코드를 한군데에서 정리
4. 사용자 정의