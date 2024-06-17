#include <stdio.h>

int main() {
    
  char str;    
  printf("정말로 이 드라이브를 포맷하시겠습니까? (y/n)");
  scanf("%c", &str);
  
  if (str == 'y') {
      printf("네, 드라이브를 포맷하겠습니다.");
  } else if (str == 'n') {
      printf("아니오, 드라이브를 포맷하겠습니다.");
  } else {
      printf("y 또는 n을 입력해주세요.");
  }
  
  return 0;
}