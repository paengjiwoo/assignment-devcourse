# 7주차_Day5
Node.js book-shop 도서 api 구현

- books 테이블과 categories 테이블 JOIN
  - books 테이블 category_id FK 설정
- 카테고리별 도서 & 신간 조회 api 생성
  - 전체 도서 api `category`와 `news` 쿼리스트링 추가
  - 각 옵션에 따라 쿼리 작성 및 데이터 조회 설정
- 도서 목록 조회 페이징 구현
  - `LIMIT` `OFFSET` 페이징 쿼리 작성
  - 전체 도서 & 개별 도서 조회 페이징 추가

<br>

# String to Boolean
쿼리 스트링의 경우 `express.json` 구조 분해할당 할 수 있지만, 모든 쿼리값이 string으로 들어온다. 따라서 값을 받아 boolean 으로 이용하고자 할 경우 타입 변환이 필요했다.

<br>

`Boolean` 메서드의 경우는 매개변수 자체의 true / false를 판단하기 때문에 string 타입인 'true' / 'false' 는 모두 `true` 값으로 반환된다. 따라서, `Boolean` 메서드로는 들어온 쿼리 값을 원하는 결과로 변환할 수 없었다.

<br>

```js
JSON.parse('true'); // true
JSON.parse('false'); // false
```
JSON 문자열의 구문을 분석하는 `JSON.parse()`를 통해 string 타입의 'true' / 'false'를 성공적으로 boolean 타입으로 변환할 수 있었다.