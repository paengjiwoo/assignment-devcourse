# 15주차_Day1
BookStore 프로젝트 frontend

# 진행 계획
- SPA 프로젝트 환경 설정
- TypeScript를 활용한 타입과 모델 작성
- component 상태관리 및 zustand 등을 활용한 전역 상태관리
- modal, dropdown 등의 UI 패턴을 라이브러리 없이 직접 구현
- 반응형 웹을 도입

<br>

# React 앱 생성
## create-react-app vs vite
## create-react-app
- webpack과 babel을 사용해 개발 서버 빌드
- Hot Module Reloading, 소스 전체를 빌드
- Node.js
- process.env.KEY

## vite
- ESBuild
- HMR시, 모듈 단위로 빌드해 빠름
- Golang
- import.meta.env.KEY

<br>

# 디렉토리 구조
- pages : 라우트에 대응하는 페이지 컴포넌트(컨테이너)
- components
- utils
- hooks
- model
- api

<br>

# tsc
타입스크립트 컴파일 명령어
- `--noEmit` : 타입체크만 진행하며 js 변환 생략
- `--skipLibCheck` : 외부 라이브러리 타입체크 생략 (시간 절약)
