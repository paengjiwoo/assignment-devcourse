# 15주차_Day4
book-store 프로젝트 frontend

# 진행 내용
- 라우트 작성
  - 활용 package : react-router-dom
  - 공통 에러 페이지 작성
- 모델 정의
- 데이터 흐름 정의
  - View → Hooks → QueryLibrary(e.g. react-query) → Fetcher → API server
  - api axios 로직 작성
  - category 가져오는 api hook(useCategory) 생성
- 회원가입 구현
  - 회원가입 페이지 작성
  - react-hook-form을 활용한 form 관리
  - alert를 useAlert라는 훅을 작성해서 관리