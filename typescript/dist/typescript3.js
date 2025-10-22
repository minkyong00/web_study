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
function add(a, b) {
    return a + b;
}
// result1의 값은 number타입이므로 result1변수의 타입은 number타입으로 추론
let result1 = add(1, 2);
const person = {
    name: '홍길동',
    hobby: ['축구', '농구']
};
/* 타입 단언 (assertion) */
// - 개발자가 직접 타입을 명시
// - as 키워드를 사용
// - 이미 개발된 JS코드를 마이그레이션할 때만 사용!
// hong 변수의 타입은 string이라고 단언
const hong = '홍길동';
// Human타입인 객체는 name:string, age:number 형태여야 함
// let human: Human = {};
// 개발자가 Human타입으로 객체의 타입을 단언
let human = {};
// 함수에서의 타입 단언
function getId(id) {
    return id;
}
// 컴파일러가 myId변수의 타입을 string으로 추론
const myId = getId('hong');
// 개발자가 함수의 반환값의 타입을 string으로 단언
const myId2 = getId('hong');
// 중첩 단언
const num2 = 10;
function shuffleBooks(books) {
    const result = books === null || books === void 0 ? void 0 : books.shuffle(); // 반환값이 null이 아님을 보장
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
const v1 = 'hello';
if (typeof v1 === 'string') {
    console.log(v1.toUpperCase());
}
// 타입 단언을 이용해서 타입 가드
// number가 아닌 타입의 값을 파라미터가 가지면 런타임 에러
function func1(param1) {
    console.log(param1.toFixed(2));
}
func1(3.142592);
// Bird 클래스
function Bird(name) {
    this.name = name;
}
function Mammal(name, breastfeed) {
    this.name = name;
    this.breastfeed = breastfeed;
}
// Bird타입의 객체
const bird = new Bird('독수리');
// Bird 타입 가드
if (bird instanceof Bird) {
    console.log(bird.name);
}
const book = {
    name: '타입스크립트',
    author: '누군가'
};
if ('author' in book) { // Book 타입 가드
    console.log(book);
}
function isHongOrPark(someone) {
    return someone.age != undefined;
}
const h = { name: '홍길동', age: 20 };
const p = { name: '박혁거세', address: '서울' };
isHongOrPark(h);
isHongOrPark(p);
const designer = {
    name: '홍길순',
    age: 20,
    jobName: 'designer'
};
const programmer = {
    name: '홍길동',
    age: 30,
    jobName: 'programmer'
};
if (designer.jobName === 'designer') {
    console.log(designer.jobName);
}
if (programmer.jobName === 'programmer') {
    console.log(programmer.jobName);
}
