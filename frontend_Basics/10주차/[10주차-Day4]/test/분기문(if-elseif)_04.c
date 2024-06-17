#include <stdio.h>

int main() {
    
  int score;    
  printf("점수를 입력하시오 (0 ~ 100) : ");
  scanf("%d", &score);
  
  if (score > 90) {
      printf("학점은 A 입니다.");
  } else if (score > 80) {
      printf("학점은 B 입니다.");
  } else if (score > 70) {
      printf("학점은 C 입니다.");
  } else if (score > 60) {
      printf("학점은 D 입니다.");
  } else { 
      printf("학점은 F 입니다."); 
  }
  
  return 0;
}