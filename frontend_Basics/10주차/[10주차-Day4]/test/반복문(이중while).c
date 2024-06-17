// 별찍기!

#include <stdio.h>

int main() {
   
  int i = 1;
  while (i <= 5) {
      int j = 0;
      while (j < i) {
          printf("*");
          j++;
      }
      printf("\n");
      i++;
  }
  
  return 0;
}