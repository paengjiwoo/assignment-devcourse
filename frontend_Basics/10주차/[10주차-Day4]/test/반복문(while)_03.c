// 반복문을 사용하여 1부터 사용자가 입력한 정수까지의 합을 출력하는 프로그램을 작성하라.

#include <stdio.h>

int main() {
   
  int num, sum = 0, i = 1;
  
  printf("숫자 입력 : ");
  scanf("%d", &num);
  
  while (i <= num) {
      sum += i;
      i++;
  }
  printf("%d까지 숫자의 합 : %d", num, sum);
  
  return 0;
}