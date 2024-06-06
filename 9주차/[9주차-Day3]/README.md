# 9주차_Day3
Node.js BookShop 프로젝트 백엔드 코드 정리

# 진행 사항
- 쿼리 오류시, 예외처리 추가
- 랜덤 데이터 생성 모듈 (random-data) 구현

<br>

# 패키지 구조
## Router
URL과 HTTP method로 요청에 따른 경로 찾아주는 역할

## Controller
요청을 받아주는 매니저 역할 (직접 요청을 처리 x)

## Service
직접 요청을 수행 (비즈니스 로직)

## Model
데이터베이스와 소통하는 데이터 모듈 (쿼리의 집합)

<br>

## 코드 점검
- reponse 포맷 통일 확인
- 데이터 베이스 중복 코드 모듈화
- 패키지 구조
  - Router, Controller, Service, Model
- 예외처리 (try/catch)
- 유효성 검사