# 7주차_Day3
Node.js book-shop 회원가입 및 로그인 api 구현 & 암호화

## 진행 사항
- mariadb 프로젝트와 연결 (with. mysql2)
- 회원가입 api 구현
- 로그인 api 구햔
- 비밀번호 초기화 및 수정 api 구현

- api response 전송에 http-status-codes 모듈 활용
- router와 controller 분리
- 비밀번호 암호화
  - 비밀번호 암호화에 맞추어 users 테이블 컬럼 변경
  - 회원 가입시, 비밀번호 암호화 및 저장
  - 로그인 시, 비밀번호 복호화
  - 비밀번호 초기화시에도 암호화된 비밀번호 저장하도록 변경

<br>

# controller
- 사용자가 보는 페이지와 데이터 처리 사이에서 중간제어자 역항을 담당