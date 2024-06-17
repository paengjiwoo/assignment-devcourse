// 사용자로부터 나이를 입력 받는다. 나이는 정수이다.
// 나이의 값이 13세 미만이면 "어린이입니다."를 출력하고
// 13세 이상 19세 미만이면 "청소년입니다."를 19세 이상이면 "성인입니다."를 출력하라.

#include <stdio.h>

int main() {
    
  int num;    
  printf("나이 입력 : ");
  scanf("%d", &num);
  
  if (num < 13) {
      printf("어린이입니다.");
  } else if (num < 19) {
      printf("청소년입니다.");
  } else {
      printf("성인입니다.");
  }

  return 0;
}