// typescript2.ts
// 다양한 타입들
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Person2_name;
// 인터페이스 타입의 객체 생성
const user1 = {
    name: '홍길동',
    age: 20
};
// 함수의 파라미터 타입과 반환 타입으로 인터페이스 타입을 사용
function getUserInfo(user) {
    return user;
}
const user2 = getUserInfo({ name: '강감찬', age: 30 });
const user3 = { name: '이순신', age: 40 };
const user4 = { name: '이순신' };
const bird1 = { name: '독수리', legCnt: 2, hasWing: true };
const student = { 1: '홍길동', 2: '강감찬' };
const student2 = { 'name': '홍길동', 'bobby': '축구' };
const student3 = ['홍길동', '강감찬'];
// 배열 인덱스로 문자 사용은 불가
/* 유니언 타입 */
// 여러 타입 중 하나 (OR, 타입들의 연산)
let un;
un = '홍길동';
un = 100;
function getInfo(obj) {
    // 타입 가드 (type guard)
    if ('color' in obj) {
        console.log(obj.name, obj.color);
    }
    else {
        console.log(obj.name, obj.pages);
    }
}
;
;
;
const is1 = {
    name: '홍길동',
    age: 30,
    hobby: ['축구', '농구']
};
const myStr = '홍길동';
const myNum = 20;
const mt1 = '홍길동';
const mt2 = 30;
const mt3 = false;
;
;
const int1 = { name: '홍길동', age: 30 };
/* enum 타입 */
// 상수를 정의하기 위한 타입
// 선언된 순서대로 0, 1, 2... 의 값을 가짐
var Planet;
(function (Planet) {
    Planet[Planet["MERCURY"] = 0] = "MERCURY";
    Planet[Planet["VENUS"] = 1] = "VENUS";
    Planet[Planet["EARTH"] = 2] = "EARTH";
    Planet[Planet["MARS"] = 3] = "MARS"; // 3
})(Planet || (Planet = {}));
const earth = Planet.EARTH; //2
const mars = Planet.MARS; //3
// enum의 값을 문자로 지정
var Planet2;
(function (Planet2) {
    Planet2["MERCURY"] = "\uC218\uC131";
    Planet2["VENUS"] = "\uAE08\uC131";
    Planet2["EARTH"] = "\uC9C0\uAD6C";
    Planet2["MARS"] = "\uD654\uC131";
})(Planet2 || (Planet2 = {}));
const earth2 = Planet2.EARTH; //지구
const mars2 = Planet2.MARS; //화성
/* 클래스 */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const person1 = new Person('홍길동', 20);
class Person2 {
    constructor(name, age) {
        _Person2_name.set(this, void 0); // #을 붙이면 private (클래스 내부에서만 접근 가능)
        __classPrivateFieldSet(this, _Person2_name, name, "f");
        this.age = age;
    }
    getName() {
        return __classPrivateFieldGet(this, _Person2_name, "f");
    }
    getAge() {
        return this.age;
    }
}
_Person2_name = new WeakMap();
const person2 = new Person2('홍길동', 20);
/* 제네릭 (generic) */
// 타입을 컴파일 시점에서 정하지 않고 실행시점에서 정의하기 위한 문법
// 제네릭을 사용하면 반복적인 타입선언을 줄일 수 있음
function getText(text) {
    return text;
}
getText('hi'); // T -> string
getText(100); // T -> number
const animal1 = {
    name: '호랑이',
    body: { color: '얼룩덜룩', legCount: 4 }
};
// 제네릭에 제약 부여
// T extends string: T는 string을 상속받는 임의의 타입
function printName(name) {
    return name;
}
printName('홍길동');
// extends: 뒤에 나오는 타입과 호환타입을 허용함
function lengthOnly(value) {
    return value.length;
}
lengthOnly('123'); // '123' 문자열은 length프라퍼티가 있으므로 ok
lengthOnly([1, 2, 3]); // [1, 2, 3] 배열은 length프라퍼티가 있으므로 ok
// 제네릭과 유니온 결합
function lengthOnly2(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value;
    }
}
lengthOnly2('123');
lengthOnly2(123);
// lengthOnly2(true);
// keyOf: 인터페이스 프라퍼티들의 키들을 추출해서 문자열 유니언 타입으로 변환 
// => 프라퍼티명과 동일한 문자열들만 허용
// {name: string; skill: string}: 익명 인터페이스
function printKeys(value) {
    console.log(value);
}
printKeys('name');
printKeys('skill');
// printKeys('hobby');
