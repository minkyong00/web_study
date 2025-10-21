// typescript3.ts
// 타입 추론, 단언, 가드

/* 타입 추론(inference) */
// - 개발자가 타입을 명시하지 않아도 컴파일러가 타입을 추론할 수 있는 경우는 
// 타입을 명시하지 않아도 됨
// - 타입 지정하는 코드의 양을 줄여 코드 가독성을 높일 수 있음
// - 변수 초기화, 함수의 매개변수 기본값 설정, 함수의 값 반환 시에 타입추론 가능

// 변수 초기화시 타입 추론
let str1; // any타입으로 추론
let str2 = 'hello'; // 문자열을 값으로 하므로 string타입으로 추론
let num1 = 100; // 숫자를 값으로 하므로 number타입으로 추론

// 함수 값 반환 시 타입 추론
// 숫자와 숫자를 더하면 당연히 number타입이므로 number타입으로 추론
function add(a: number, b: number){
    return a + b;
}

// result1의 값은 number타입이므로 result1변수의 타입은 number타입으로 추론
let result1 = add(1, 2);

// 인터페이스에서 타입 추론
interface Person3<T> {
    name: string;
    hobby: T;
}

const person: Person3<string[]> = {
    name: '홍길동',
    hobby: ['축구', '농구']
}

/* 타입 단언 (assertion) */
// - 개발자가 직접 타입을 명시
// - as 키워드를 사용
// - 이미 개발된 JS코드를 마이그레이션할 때만 사용!

// hong 변수의 타입은 string이라고 단언
const hong = '홍길동' as string;

// 인터페이스에서의 타입 단언
interface Human {
    name: string;
    age: number;
}

// Human타입인 객체는 name:string, age:number 형태여야 함
// let human: Human = {};

// 개발자가 Human타입으로 객체의 타입을 단언
let human: Human = {} as Human;

// 함수에서의 타입 단언
function getId(id){
    return id;
}

// 컴파일러가 myId변수의 타입을 string으로 추론
const myId = getId('hong');

// 개발자가 함수의 반환값의 타입을 string으로 단언
const myId2 = getId('hong') as string;

// 중첩 단언
const num2 = (10 as any) as number;

// ?. : 옵셔널 체이닝 (null이나 undefined이면 undefined로 결정 : null 방지)
interface Books {
    shuffle: Function
}

function shuffleBooks(books: Books | null) {
   const result = books?.shuffle(); // 반환값이 null이 아님을 보장

    // !. : 반환타입을 Books로 단언
    // 컴파일 에러 없음, 실행 시 null이 들어오면 에러
    //const result = books!.shuffle();
    return result; // books이거나 undefined로 반환
}

shuffleBooks(null);

/* 타입 가드(guard) */
// 여러개의 타입으로 지정된 값을 특정 위치에서 원하는 타입으로 구분
// typeof, instanceof. in 연산자를 통해서 타입의 범위를 좁힘

// typeof로 타입 가드
const v1: string | number | boolean = 'hello';
if(typeof v1 === 'string') {
    console.log(v1.toUpperCase());
}

// 타입 단언을 이용해서 타입 가드
// number가 아닌 타입의 값을 파라미터가 가지면 런타임 에러
function func1(param1: string | number | boolean):void {
    console.log((param1 as number).toFixed(2));
}
func1(3.142592);
// func1(true); // 컴파일 정상, 실행 에러

// instanceof 타입 가드
// Bird 인터페이스
interface Bird {
    name: string;
}
// Bird 클래스
function Bird(name: string): void {
    this.name = name;
}
interface Mammal {
    name: string;
    breastfeed: true
}
function Mammal(name: string, breastfeed: boolean): void {
    this.name = name;
    this.breastfeed = breastfeed;
}

// Bird타입의 객체
const bird: Bird | Mammal = new Bird('독수리');

// Bird 타입 가드
if (bird instanceof Bird) {
    console.log(bird.name);
}

// 실행 안됨
// if(bird instanceof Mammal){
//     console.log(bird.name);
// }

// in 연산자 타입 가드
interface Book {
    name: string;
    author: string;
}
interface Lecture {
    name: string;
    tutor: string;
}

const book: Book | Lecture = {
    name: '타입스크립트',
    author: '누군가'
};

if('author' in book) { // Book 타입 가드
    console.log(book);
}

// 실행 안됨
//if('tutor' in book) { // Lecture 타입 가드
//   console.log(book);
//}

// 타입가드 함수 (js 사용)
// 두개 이상의 타입이 같은 프라퍼티를 가지고 있으면 in연산자로는 타입가드가 불가능
// is연산자를 사용해서 타입가드
interface Hong {
    name: string;
    age: number;
}
interface Park {
    name: string;
    address: string;
}
function isHongOrPark(someone: Hong | Park): someone is Hong {
    return (someone as Hong).age != undefined;
}
const h: Hong = {name: '홍길동', age: 20};
const p: Park = {name: '박혁거세', address: '서울'};
isHongOrPark(h);
isHongOrPark(p);

// 구별된 유니언 타입 (discriminated unions)
// 두 개 이상의 타입이 같은 이름의 프라퍼티만 가지고 있을 때
// 프라퍼티의 값으로 타입 가드
interface Designer {
    name: string;
    age: number;
    jobName: 'designer';
}
const designer: Designer = {
    name: '홍길순',
    age: 20,
    jobName: 'designer'
}

interface Programmer {
    name: string;
    age: number;
    jobName: 'programmer';
}
const programmer: Programmer = {
    name: '홍길동',
    age: 30,
    jobName: 'programmer'
}

if(designer.jobName === 'designer') {
    console.log(designer.jobName);
}

if(programmer.jobName === 'programmer') {
    console.log(programmer.jobName);
}







