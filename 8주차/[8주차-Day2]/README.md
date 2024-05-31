# 8주차_Day2
Node.js book-shop 장바구니 api 

# 진행 사항
- 장바구니 cartItems 테이블 생성
- cartController 생성
- 장바구니 api 구현
  - 장바구니 담기 api 구현
  - 장바구니 목록 조회 api 구현
  - 장바구니에서 선택한 상품목록 조회 api 구현
  - 장바구니 도서 삭제 api 구현

# SQL 에러 해결
## 제약 조건 이름 중복
FK 설정 시, 다른 테이블에서 사용한 제약 조건의 이름을 동일하게 사용할 수 없다. 해당 경우 DUPLICATE 에러 발생. 따라서 단순히 컬럼명(e.g. `user_id`, `book_id`)을 사용하는 방식이 아닌 `fk_cartitems_users_id`와 같은 방식으로 제약 조건 명을 설정하여 유일성을 확보하였다.

뿐만 아니라, fk 설정시 자동으로 생성되는 index의 경우에서도 DUPLICATE 에러가 발생하였다. 이 역시, idx의 명칭을 `user_id_idx`의 형식에서 `cartitems_user_id_idx`와 같은 형식으로 변경하여 유일성을 확보하였다.
