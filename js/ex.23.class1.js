/*
    클래스 실습
    1. 학생(Student) 클래스를 생성
    2. 학생은 이름, 나이, 취미(여러개), 국어점수, 영어점수, 수학점수의 데이터를 가짐
    3. 학생 객체를 3개 생성
    4. 아래와 같이 출력
        총 3명의 학생 정보입니다.
        홍길동, 20세, 취미:골프, 스키 국어:100, 영어:100, 수학:100, 총점:300, 평균:100
        강감찬, 30세, 취미:독서, 낮잠 국어:90, 영어:90, 수학:90, 총점:270, 평균:90
        이순신, 40세, 취미:게임, 바둑 국어:80, 영어:80, 수학:80, 총점:240, 평균:80
*/

class Student {

    // 학생수 저장하는 클래스로 접근하는 static 변수
    static _studentCount = 0;

    // 생성자
    constructor(name, age, hobby1, kor, eng, math){
        this._name = name;
        this._age = age;
        this._hobby1 = hobby1;
        // this._hobby2 = hobby2;
        this._kor = kor;
        this._eng = eng;
        this._math = math;
        //학생 객체 생성 시에 학생 수를 증가
        Student._studentCount++;
    }

    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get hobby1() {
        return this._hobby1;
    }
    get hobby2() {
        return this._hobby2;
    }
    get kor() {
        return this._kor;
    }
    get eng() {
        return this._eng;
    }
    get math() {
        return this._math;
    }

    // 학생수를 반환하는 클래스로 접근하는 static 메소드
    static getStudentCount(){ return Student._studentCount };

    // 학생 정보를 출력하는 객체로 접근하는 protype 메소드
    // this는 이 메소드를 호출한 객체
    printStudent() { 
        console.log(
        `${this.name}, ${this.age}세, 취미:${this.hobby1.join(', ')},`
        + `국어:${this.kor}, 영어:${this.eng}, 수학:${this.math},`
        + `총점:${this.kor + this.eng + this.math}, 평균: ${(this.kor + this.eng + this.math) / 3}`
        );
    };

    // printStudent(name, age, hobby1, kor, eng, math) { 
    //     console.log(
    //     `${name}, ${age}세, 취미:${hobby1.join(',')}, 국어:${kor}, 영어:${eng}, 수학:${math}, 총점:${kor + eng + math}, 평균: ${(kor + eng + math) / 3}`
    //     );
    // };
}

const student1 = new Student('홍길동', 20, ['골프', '스키'], 100, 100, 100);
const student2 = new Student('강감찬', 30, ['독서', '낮잠'], 90, 90, 90);
const student3 = new Student('이순신', 40, ['게임', '바둑'], 80, 80, 80);


console.log(`총 ${Student.getStudentCount()}명의 학생 정보입니다.`);
student1.printStudent();
student2.printStudent();
student3.printStudent();