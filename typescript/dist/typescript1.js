// typescript1.ts
// 타입스크립트의 기본타입, 함수타입
// 타입지정은 변수나 함수 뒤에 :을 사용
// string 
let hello = 'hello';
// hello = 10; // 지정된 타입의 값만 허용, 다른 타입인 경우는 컴파일(ts -> js) 에러
// number
let num = 10;
// number = true;
// boolean
let bool = true;
// bool = 'hi';
// object
let obj = {
    name: '홍길동',
    age: 20
};
// array
let arr1 = ['홍길동', '강감찬'];
// arr1 = [100, 200];
let arr2 = ['홍길동', '강감찬'];
// tuple
// 고정 길이이며 요소들의 타입이 미리 정의된 배열
let tup = ['홍길동', 20];
// tup = [20, '홍길동'];
// tup = ['홍길동'];
// any
// 어떤 타입의 값도 허용
// 기존의 js를 ts로 변환해야 하는데 타입을 확정할 수 없는 경우에만 사용
let anyvar = 100;
anyvar = '홍길동';
anyvar = true;
// null
// null은 확보된 메모리가 없음을 의미하는 타입이자 값
let nul = null;
// undefined
// undefined는 확보된 메모리는 있지만 값이 없음을 의미하는 타입이자 값
let und = undefined;
// function
// 파라미터, 반환 타입 지정
function getStr(str) {
    return 'hi ' + str;
}
console.log(getStr('홍길동'));
// console.log(getStr(100));
// 함수 호출시 인자 개수와 파라미터 개수를 맞춰줘야 함
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 2));
// console.log(getSum(1));
// console.log(getSum(1, 2, 3));
// optional parameter : 파라미터에 해당하는 인자가 없을 때 ?를 사용
function getSum2(num1, num2, num3) {
    if (num3) {
        return num1 + num2 + num3;
    }
    else {
        return num1 + num2;
    }
}
console.log(getSum2(1, 2, 3));
console.log(getSum2(1, 2));
