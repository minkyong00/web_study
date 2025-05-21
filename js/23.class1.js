/*
 클래스 문법 
*/

// 클래스 선언
// 클래스명은 대문자로 시작
class Person {
    
    // 생성자
    // 클래스를 통해서 생성되는 객체의 프라퍼티들을 초기화하는 역할
    // 클래스에 생성자를 정의하지 않으면 기본생성자(파라미터가 없는 생성자)가 만들어짐
    // J/S에선느 객체의 프라퍼티들을 생성자 내에 선언함
    // name, age : 객체 생성시에 생성자에 전달되는 파라미터명
    // this : 클래스를 통해서 생성되고 있는 객체 자신
    // _name, _age : 객체의 프라퍼티명 

    // person 클래스의 프라퍼티에는 _name, _age를 가짐, name, age는 알 수 없음
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // getter method : 객체의 프라퍼티에 접근하기 위한 메소드
    //_name을 가져오기 위한 get name 메소드 작성
    get name() {
        return this._name;
    }

    // get age() {
    //     return this._age;
    // }

    // setter method : 객체의 프라퍼티값을 변경하기 위한 메소드
    set name(name) {
        this._name = name;
    }

    // prototype method : 객체로 접근하는 메소드
    printPrototype(name, age) {
        console.log(name);
        console.log(age);
    }

    // static method : 객체의 생성없이 클래스로 접근하는 메소드
    static printStatic(name) {
        console.log(name);
    }
} // class

// 객체 생성
// person1, person2 : 메모리에 생성된 객체의 참조값을 저장하는 객체참조변수
const person1 = new Person('홍길동', 20); // _name이 홍길동, _age가 20 인 객체
const person2 = new Person('강감찬', 30); // _name이 강감찬, _age가 30 인 객체

// 프라퍼티 접근
console.log(person1.name); // 홍길동, name getter 호출
console.log(person2.age); // undefied, age getter 없음

// 프라퍼티 변경
person1.name = '홍길순'; // name setter 호출
console.log(person1.name); // 홍길순, name getter 호출
person1.age = 50; // age 프라퍼티가 동적 생성됨 -> person1에는 _name, _age, age가 생김
console.log(person1.age); // 50

// 프로토타입메소드(객체로 접근하는 메소드) 호출
person1.printPrototype('홍길동', 20); // 홍길동
person2.printPrototype('강감찬', 30); // 강감찬
// Person.printPrototype('홍길동'); // TypeError: Person.printPrototype is not a function, 클래스로 접근 불가


// static 메소드(클래스로 접근하는 메소드) 호출
Person.printStatic('이순신'); // 이순신
// person1.printStatic('장보고'); // TypeError: person1.printStatic is not a function, 객체로 접근 불가

// J/S에서 클래스는 function 타입, 즉 클래스는 내부적으로 함수로 처리됨
console.log(typeof Person); // function
console.log(Person); // [class Person]
console.log(person1 instanceof Person); // true
// J/S에서 Object를 제외한 모든 클래스는 Object를 상속받고 있음
// person1은 Person타입이기도 하지만 Object타입이기도 함
// instance : 클래스에서 생성된 객체가 클래스의 인스턴스
console.log(person1 instanceof Object); // true


