// 책읽기 마라톤 기능을 가진 프로그램을 구현해보자. 책읽기 마라톤이란 내가 읽은 책들의 페이지 수를 누적 계산하는 기능이다.
// 그날 그날 읽은 책들의 페이지 수를 사용자로부터 입력 받으면 최종 누적된 페이지 수에 새로 입력된 페이지 수가 추가로 더해지고,
// 다시 갱신된 최종 페이지 수가 출력되는 것이다. 이 과정을 사용자가 -1을 입력할 때까지 계속 반복한다. 
// 이 기능을 함수로 구현하되, 페이지의 누적 결과를 저장하는 변수를 전역 변수로도 구현해보고, static 변수로도 구현해보도록 한다.

// ----- 전역변수 -----
#include <stdio.h>

int main() {
    int total = 0;
   
    int read() {
        int pages;
        printf("읽은 책의 페이지 수를 입력하시오 : ");
        scanf("%d", &pages);
        total += pages;
        return pages;
    }
  
    while (1) {
        int flag = read();
        if (flag != -1) {
            printf("최종 누적 페이지 : %d\n", total);
        } else {
            printf("더 분발하세요.");
            break;
        }
    }
  
  return 0;
}


//-----static 변수 활용-----
#include <stdio.h>

int main() {
   
    int read() {
        static int total = 0;
        int pages;
        printf("읽은 책의 페이지 수를 입력하시오 : ");
        scanf("%d", &pages);
        if (pages == -1) {
            printf("더 분발하세요.");
            return -1;
        } else {
            total += pages;
            printf("최종 누적 페이지 : %d\n", total);
            return pages;
        }
    }
  
    while (1) {
        int flag = read();
        if (flag == -1) break;
    }
  
  return 0;
}