// typescript2.ts
// 다양한 타입들

/* 인터페이스 */
// 객체의 타입을 정의할 때 사용

interface User {
    name: string;
    age: number;
}

// 인터페이스 타입의 객체 생성
const user1: User = {
    name: '홍길동',
    age: 20
}

// 함수의 파라미터 타입과 반환 타입으로 인터페이스 타입을 사용
function getUserInfo(user: User): User {
    return user;
}

const user2: User = getUserInfo({name: '강감찬', age: 30});

// 인터페이스 옵셔널 속성
// age 프라퍼티는 있다면 number타입, 없을 수 있음
interface User2 {
    name: string;
    age?: number;
}

const user3: User2 = {name: '이순신', age: 40};
const user4: User2 = {name: '이순신'};

// 인터페이스 상속
interface Animal {
    name: string;
    legCnt: number;
}

interface Bird extends Animal {
    hasWing: boolean;
}

const bird1: Bird = {name: '독수리', legCnt: 2, hasWing: true};
// const bird2: Bird = {name: '독수리', legCnt:2};

// 객체 프라퍼티명으로 숫자를 사용
interface Student {
    [key: number]: string;
}

const student: Student = {1: '홍길동', 2: '강감찬'};

// 객체 프라퍼티명으로 문자를 사용
interface Student2 {
    [key: string]: string;
}

const student2: Student2 = {'name': '홍길동', 'bobby': '축구'};

// 배열 인덱스로 숫자 사용
interface Student3 {
    [index: number]: string;
}

const student3: Student3 = ['홍길동', '강감찬'];

// 배열 인덱스로 문자 사용은 불가

/* 유니언 타입 */
// 여러 타입 중 하나 (OR, 타입들의 연산)
 
let un: string | number;
un = '홍길동';
un = 100;
// un = true;

// 함수 파라미터로 유니언 타입 선언
interface Pen {
    name: string;
    color: string;
}
interface Note {
    name: string;
    pages: number;
}

function getInfo(obj: Pen | Note): void {
    // 타입 가드 (type guard)
    if('color' in obj) {
        console.log(obj.name, obj.color);
    } else {
        console.log(obj.name, obj.pages);
    }
}

/* 인터섹션 타입 */
// 타입 2개 이상을 하나로 합쳐서 사용
interface I1 {name: string};
interface I2 {age: number};
interface I3 {hobby: string[]};

const is1: I1 & I2 & I3 = {
    name: '홍길동',
    age: 30,
    hobby: ['축구', '농구']
}

/* type : 타입 별칭 */
// 어떤 타입에 대한 별도의 이름
// 인터페이스는 객체의 타입을 정의하고 상속이 가능
// 타입 별칭은 모든 타입을 정의하고 상속이 불가능
type myStr = string;
const myStr: myStr = '홍길동';

type myNum = number;
const myNum: myNum = 20;

type myType = string | number | boolean;
const mt1: myType = '홍길동';
const mt2: myType = 30;
const mt3: myType = false;

// 인터페이스의 선언 병합 (declaration merging)
// 인터페이스를 동일한 이름으로 2개 이상 선언하면 프라퍼티들이 합쳐짐
// 인터페이스에서는 가능하나 타입 별칭은 불가능
interface Int1 { name: string};
interface Int1 { age: number };
const int1: Int1 = {name: '홍길동', age: 30};

/* enum 타입 */
// 상수를 정의하기 위한 타입
// 선언된 순서대로 0, 1, 2... 의 값을 가짐
enum Planet {
    MERCURY, // 0
    VENUS, // 1
    EARTH, // 2
    MARS // 3
}

const earth: number = Planet.EARTH; //2
const mars: number = Planet.MARS //3

// enum의 값을 문자로 지정
enum Planet2 {
    MERCURY = '수성',
    VENUS = '금성',
    EARTH = '지구',
    MARS = '화성'
}

const earth2: string = Planet2.EARTH; //지구
const mars2: string = Planet2.MARS //화성

/* 클래스 */
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
}
const person1: Person = new Person('홍길동', 20);

class Person2 {
    #name: string; // #을 붙이면 private (클래스 내부에서만 접근 가능)
    age: number;
    constructor(name: string, age: number){
        this.#name = name;
        this.age = age;
    }
    getName(): string {
        return this.#name;
    }
    getAge(): number {
        return this.age;
    }
}
const person2: Person2 = new Person2('홍길동', 20);

/* 제네릭 (generic) */
// 타입을 컴파일 시점에서 정하지 않고 실행시점에서 정의하기 위한 문법
// 제네릭을 사용하면 반복적인 타입선언을 줄일 수 있음
function getText<T>(text: T): T {
    return text;
}
getText<string>('hi'); // T -> string
getText<number>(100); // T -> number

// 인터페이스에 제네릭 사용
interface Animal2<T> {
    name: string;
    body: T;
}
const animal1: Animal2<{color: string, legCount: number}> = {
    name: '호랑이',
    body: {color: '얼룩덜룩', legCount: 4}
}

// 제네릭에 제약 부여
// T extends string: T는 string을 상속받는 임의의 타입
function printName<T extends string>(name: T): T {
    return name;
}
printName('홍길동');

// extends: 뒤에 나오는 타입과 호환타입을 허용함
function lengthOnly<T extends {length: number}>(value: T): number {
    return value.length;
}
lengthOnly('123'); // '123' 문자열은 length프라퍼티가 있으므로 ok
lengthOnly([1, 2, 3]); // [1, 2, 3] 배열은 length프라퍼티가 있으므로 ok

// 제네릭과 유니온 결합
function lengthOnly2<T extends string | number>(value: T): number {
    if(typeof value === 'string'){
        return value.length;
    } else {
        return value;
    }
}
lengthOnly2('123');
lengthOnly2(123);
// lengthOnly2(true);

// keyOf: 인터페이스 프라퍼티들의 키들을 추출해서 문자열 유니언 타입으로 변환 
// => 프라퍼티명과 동일한 문자열들만 허용
// {name: string; skill: string}: 익명 인터페이스
function printKeys<T extends keyof{name: string; skill: string}>(value: T): void {
    console.log(value);
}
printKeys('name');
printKeys('skill');
// printKeys('hobby');

















