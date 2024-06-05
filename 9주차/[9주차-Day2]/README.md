# 9주차_Day2
Node.js BookShop jwt 토큰 검증 추가

# 진행 사항
- 장바구니 물품 조회 / 장바구니 물품 삭제 api 토큰 검증 추가
- 주문하기 / 주문조회 / 주문 상세조회 api 토큰 검증 추가

- 개별 도서 조회 api 토큰 검증 추가 (좋아요 여부 확인)
  - 잘못된 token이 들어온 경우 에러 (JsonWebTokenError)와 token이 아예 들어오지 않은 경우 에러(ReferenceError)를 분리
  - 전자는 잘못된 접근, 후자는 로그인을 하지 않은 경우로 분류

- 전체 도서 조회 pagination 구현

<br>

# 데이터 ROW 수 반환하기

```SQL
SELECT * FROM DATA;
SELECT count(*) AS total FROM DATA;
```
해당 쿼리의 경우, ROW 수를 반환할 수는 있지만 쿼리가 두번 실행되어 전체 스캐닝을 두번 하게 된다.
이 때, `SQL_CALC_FOUND_ROWS`와 `FOUND_ROWS()`를 활용하여 데이터 전체를 두번 스캔 하지 않고 ROW 수를 반환할 수 있다.

## FOUND_ROWS()
```SQL
SELECT * FROM DATA;
SELECT FOUND_ROWS();
```
`FOUND_ROWS()`를 사용하여 직전 쿼리 수행 결과를 통해 ROW수를 반환한다. <br>

## SQL_CALC_FOUND_ROWS
`FOUND_ROWS()`는 LIMIT을 따르기 떄문에, LIMIT이 아닌 전체 ROW 수를 찾고 싶다면 `SQL_CALC_FOUND_ROWS`를 함께 사용하면 된다.

```SQL
SELECT * from DATA LIMIT 10;
SELECT FOUND_ROWS();
```
ROW의 수가 10을 초과해도 결과가 10으로 반환된다.

```SQL
SELECT SQL_CALC_FOUND_ROWS * from DATA LIMIT 10;
SELECT FOUND_ROWS();
```
결과가 실제 ROW의 수만큼 반환된다.
