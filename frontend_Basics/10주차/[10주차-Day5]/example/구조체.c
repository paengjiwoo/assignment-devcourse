#include <stdio.h>
#include <string.h>

struct student {
    char name[10];
    int age;
    char blood_type[1];
} st1;

int main() {
    strcpy(st1.name, "팽지우");
    st1.age = 26;
    strcpy(st1.blood_type, "B");
    
    printf("이름: %s, 나이 : %d, 혈액형 : %s", st1.name, st1.age, st1.blood_type);
    
    return 0;
}