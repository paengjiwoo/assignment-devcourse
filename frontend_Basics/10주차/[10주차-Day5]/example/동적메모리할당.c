#include <stdio.h>
#include <stdlib.h>

int main() {
    int num;
    int *pages;
    
    printf("페이지 수를 입력하세요 : ");
    scanf("%d", &num);
    
    pages = (int*)malloc (sizeof(int) *num);
    
    if (pages == NULL) {
        printf("메모리가 할당되지 않았습니다.");
        return 0;
    }
    
    printf("할당된 메모리 크기는 %d입니다.", sizeof(int) *num);
    
    free(pages);
    return 0;
}