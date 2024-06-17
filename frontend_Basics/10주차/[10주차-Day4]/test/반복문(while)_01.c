// 반복문을 사용하여 1월부터 12월까지 출력하라.

#include <stdio.h>

int main() {
   
  int month = 1;  
  while (month < 13) {
      printf("%d월\n", month);
      month++;
  }
  
  return 0;
}