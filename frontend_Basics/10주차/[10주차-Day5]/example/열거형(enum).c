#include <stdio.h>
#include <string.h>

enum month {
  January = 1,
  Feburary, // 2
  March, // 3
  April, // 4
  May,
  June,
  July,
  August,
  September
};

int main() {
    int mon;
    printf("요일을 선택하세요 : ");
    scanf("%d", &mon);
    
    switch (mon) {
        case January:
            printf("1월에는 눈이와요");
            break;
        case Feburary:
            printf("2월에는 발렌타인 데이");
            break;
        default:
            printf("잘못 입력하셨습니다.");
            break;
    }
    
    return 0;
}