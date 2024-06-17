// 사용자로부터 3개의 정수를 입력 받아서, 3개의 수를 곱한 결과를 출력하라.

#include <stdio.h>

int main() {
    
  printf("세 숫자 입력 : ");
  int num1, num2, num3;
  scanf("%d %d %d", &num1, &num2, &num3);
  printf("%d", num1 * num2 * num3);

  return 0;
}