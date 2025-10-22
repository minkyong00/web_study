// typescript4.ts
// 타입스크립트에서 타입 호한

// 좁은타입(리터럴타입)에서 넣은타입(일반타입)으로 호환 가능
let s1: string = 'hi'; // 넓은 타입, 모든 string 타입
let s2: 'hello' = 'hello'; // 좁은 타입, 'hello' string 타입
s1 = s2; // 'hello' -> string OK
// s2 = s1; // string -> 'hello' NOT OK

// 구조적 타입(structural typing)
// 구조: 프라퍼티에 대한 정의 (프라퍼티명과 프라퍼티타입)
// 타입이 무엇인지가 중요한 것이 아니라 타입이 가지는 프라퍼티명과 프라퍼티타입이 중요
interface I4 { name: string; } // I4타입
interface I5 { name: string; } // I5타입
let i4: I4 = { name: '홍길동' };
let i5: I5 = { name: '강감찬' };
i4 = i5;
i5 = i4;

interface I6 { name: number; } // I6타입
let i6: I6 = { name: 100 }
// i4 = i6; // NOT OK
// i6 = i4; // NOT OK

// 객체 타입 호환
// 더 많은 프라퍼티를 가진 객체는 더 적은 프라퍼티를 가진 객체로 호환 가능
// 구조적으로 Ainmal5보다 Dog5, Bird5가 더 큼
interface Animal5 { name: string; } // name만 가진 구조
interface Dog5 { name: string; sound: string; } // name과 sound를 가진 구조
interface Bird5 { name: string; leg: number; } // name과 leg를 가진 구조
let animal5: Animal5 = { name: '동물' };
let dog5: Dog5 = { name: '강아지', sound: '멍멍'};
let bird5: Bird5 = { name: '새', leg: 2 };
// dog5 = bird5; // sound에 대한 정의가 없음
// bird5 = dog5; // leg에 대한 정의가 없음
animal5 = dog5; // OK
animal5 = bird5; // OK

// 옵셔널체이닝을 활용한 타입 호환
interface Dob6 { name: string; sound?: string; }
interface Bird6 { name: string; leg?: number; }
let dog6: Dob6 = { name: '강아지', sound: '멍멍' };
let bird6: Bird6 = { name: '새', leg: 2 };
dog6 = bird6; // name만 정의되어 있다면 호환 가능
bird6 = dog6; // name만 정의되어 있다면 호환 가능

// 함수에서의 타입 호환
// 파라미터가 적은 쪽에서 많은 쪽으로 호환이 가능
let func6 = function(a: number, b: number): number {
    return a + b;
}
let func7 = function(a: number): number {
    return a;
}
func6 = func7; // OK, func7의 a파라미터를 잃지 않음
// func7 = func6; // NOT OK, func6의 b파라미터를 잃어 버림

// enum 타입 호환
// enum타입은 같은 구조를 가져도 호환되지 않음
enum Enum1 { A, B, C };
enum Enum2 { A, B, C };
let e1: Enum1 = Enum1.A;
let e2: Enum2 = Enum2.A;
// e1 = e2;
// e2 = e1;

// 제네릭 타입 호환
interface In1<T> {} // 구조가 정의되어 있지 않음
let inter1: In1<string> = '홍길동';
let inter2: In1<number> = 30;
// 구조가 정의되어 있지 않으므로 타입 서로간에 호환에 문제가 없음
inter1 = inter2; 
inter2 = inter1; 

interface In2<T> { data: T; } // 구조가 정의되어 있음
let inter3: In2<string> = { data: '홍길동' };
let inter4: In2<number> = { data: 20 };
// 구조가 정의되어 있으므로 타입 서로간에 호환 불가
// inter3 = inter4; // number -> string, NOT OK
// inter4 = inter3; // string -> number, NOT OK






































