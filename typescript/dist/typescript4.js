// typescript4.ts
// 타입스크립트에서 타입 호한
// 좁은타입(리터럴타입)에서 넣은타입(일반타입)으로 호환 가능
let s1 = 'hi'; // 넓은 타입, 모든 string 타입
let s2 = 'hello'; // 좁은 타입, 'hello' string 타입
s1 = s2; // 'hello' -> string OK
let i4 = { name: '홍길동' };
let i5 = { name: '강감찬' };
i4 = i5;
i5 = i4;
let i6 = { name: 100 };
let animal5 = { name: '동물' };
let dog5 = { name: '강아지', sound: '멍멍' };
let bird5 = { name: '새', leg: 2 };
// dog5 = bird5; // sound에 대한 정의가 없음
// bird5 = dog5; // leg에 대한 정의가 없음
animal5 = dog5; // OK
animal5 = bird5; // OK
let dog6 = { name: '강아지', sound: '멍멍' };
let bird6 = { name: '새', leg: 2 };
dog6 = bird6; // name만 정의되어 있다면 호환 가능
bird6 = dog6; // name만 정의되어 있다면 호환 가능
// 함수에서의 타입 호환
// 파라미터가 적은 쪽에서 많은 쪽으로 호환이 가능
let func6 = function (a, b) {
    return a + b;
};
let func7 = function (a) {
    return a;
};
func6 = func7; // OK, func7의 a파라미터를 잃지 않음
// func7 = func6; // NOT OK, func6의 b파라미터를 잃어 버림
// enum 타입 호환
// enum타입은 같은 구조를 가져도 호환되지 않음
var Enum1;
(function (Enum1) {
    Enum1[Enum1["A"] = 0] = "A";
    Enum1[Enum1["B"] = 1] = "B";
    Enum1[Enum1["C"] = 2] = "C";
})(Enum1 || (Enum1 = {}));
;
var Enum2;
(function (Enum2) {
    Enum2[Enum2["A"] = 0] = "A";
    Enum2[Enum2["B"] = 1] = "B";
    Enum2[Enum2["C"] = 2] = "C";
})(Enum2 || (Enum2 = {}));
;
let e1 = Enum1.A;
let e2 = Enum2.A;
let inter1 = '홍길동';
let inter2 = 30;
// 구조가 정의되어 있지 않으므로 타입 서로간에 호환에 문제가 없음
inter1 = inter2;
inter2 = inter1;
let inter3 = { data: '홍길동' };
let inter4 = { data: 20 };
// 구조가 정의되어 있으므로 타입 서로간에 호환 불가
// inter3 = inter4; // number -> string, NOT OK
// inter4 = inter3; // string -> number, NOT OK
