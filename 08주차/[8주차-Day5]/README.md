# 8주차_Day5
Node.js 주문 api 구현

# 진행 사항
- 주문하기 api 구현
  - 쿼리 비동기 처리
  - cartItems 테이블의 해당 데이터 삭제
    - 카트에 담았던 물품들을 주문할 경우, 카트에서 삭제!
- 주문 목록 조회 api 구현
- 주문 상세 조회 api 구현

<br>

# DELETE vs TRUNCATE vs DROP
## DELETE
- 조건에 따라 개별 데이터 삭제 가능
- 조건을 작성하지 않으면 전체 데이터 삭제 가능
- 쿼리를 실행해도 테이블 존재
```sql
DELETE FROM [테이블명]
WHERE [조건];
```

## TRUNCATE
- 조건과 상관 없이 모든 행이 삭제
- 쿼리를 실행해도 모든 테이블 존재
- AUTO INCREMENT 초기화
```sql
TRUNCATE [테이블명];
```

## DROP
- 테이블 삭제
```sql
DROP TABLE [테이블명];
```

## 참고
- 테이블 삭제를 위해 외래기 체약 조건을 끄는 방법
```sql
SET FOREIGN_KEY_CHECKS = 0; -- 끄기
SET FOREIGN_KEY_CHECKS = 1; -- 켜기
```