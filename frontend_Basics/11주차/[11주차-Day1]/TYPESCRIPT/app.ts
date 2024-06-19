enum gradeType {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F'
}

// interface 활용
interface Student {
  id : number,
  name : string,
  age? : number, // ? : 선택적 프로퍼티 (생략 가능)
  grade : gradeType,
  enrolled : boolean,
  setClass? : (clsId: number) => void;
  getClass? : () => number;
}

class FirstStudent implements Student {
    id = 17;
    name = 'jiwoo';
    age = 26;
    grade = gradeType.A;
    enrolled = true;

    // setName 메서드 오버라이딩
    setName(name: string): void {
        this.name = name;
        console.log('이름 설정 : ' + this.name);
    }
}

const firstInstance = new FirstStudent();
firstInstance.setName('팽지우');

function getStd(id: number, message?: string): Student {
  return {
    id : id,
    name : 'jiwoo',
    age : 26,
    grade : gradeType.A,
    enrolled : true
  };
}

function setStd(student : Student): void {
    console.log(student)
}

setStd({
    id : 2,
    name : 'paeng',
    age : 25,
    grade : gradeType.A,
    enrolled : true
})