#include <stdio.h>
#include <string.h>

struct object {
    char name[10];
    int height;
    int weight;
} st1;

int main() {
    char name[10];
    int height, weight;
    
    printf("물건의 이름 : ");
    scanf("%s", &name);
    
    printf("물건의 높이(cm) : ");
    scanf("%d", &height);
    
    printf("물건의 무게(kg) : ");
    scanf("%d", &weight);
    
    strcpy(st1.name, name);
    st1.height = height;
    st1.weight = weight;
    
    printf("보낼 물건의 정보 : %s, %dcm, %dkg", st1.name, st1.height, st1.weight);
    
    return 0;
}