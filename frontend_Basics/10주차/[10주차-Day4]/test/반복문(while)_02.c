// 사용자로부터 입력받은 숫자에 해당하는 구구단을 출력하시오.
// (사용자 입력 함수인 scanf를 사용하여 사용자로부터 정수를 입력받으시오.)

#include <stdio.h>

int main() {
   
  int num;
  int i = 1;
  printf("2 부터 9 중 하나의 숫자를 입력 : ");
  scanf("%d", &num);
  while (i < 10) {
      printf("%d * %d = %d\n", i, num, i * num);
      i++;
  }
  
  return 0;
}