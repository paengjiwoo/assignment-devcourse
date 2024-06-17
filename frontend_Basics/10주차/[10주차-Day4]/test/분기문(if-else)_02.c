// 사용자로부터 세 개의 정수를 입력 받는다.
// 입력 받은 세 개의 정수를 비교하여 그 중 가장 작은 최소값을 출력하는 프로그램을 작성하라.

#include <stdio.h>

int main() {
    
  int num1, num2, num3;    
  printf("숫자 세 개입력 : ");
  scanf("%d %d %d", &num1, &num2, &num3);
  if (num1 <= num2 && num1 <= num3) {
      printf("가장 작은 수 : %d", num1);
  } else if (num2 <= num1 && num2 <= num3) {
      printf("가장 작은 수 : %d", num2);
  } else if (num3 <= num1 && num3 <= num2) {
      printf("가장 작은 수 : %d", num3);
  } else {
      printf("입력값이 잘못되었습니다.")
  }

  return 0;
}