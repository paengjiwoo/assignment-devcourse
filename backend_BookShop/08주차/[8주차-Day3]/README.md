# 8주차_Day3
Node.js book-shop 주문 api 구현 시작

# 진행 사항
- 주문 관련 테이블 생성 
  - order : 주문 정보 전반 저장
  - orderedBook : 주문 별 상세 책 정보를 불러오는 테이블
  - delivery : 주문자 상세 정보 저장 
- 주문 controller (orderController) 생성
  - 주문 하기 api 구현 로직 작성
  - delivery insert → order insert → orderBook insert

# last_insert_id() vs MAX()

```sql
SELECT MAX(id) FROM orderedBook;
SELECT last_insert_id(id) FROM orderedBook;

```
`last_insert_id()`의 경우 비슷한 시간대의 쿼리가 발생할 경우에 원하는 값을 도출하지 못할 수 있다. => `MAX()`를 사용하여 해결