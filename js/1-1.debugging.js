//  자바스크립트 엔진은 자바스크립트 코드를 위에서 아래로 한 줄씩  순차적으로 실행
// 중단점 찍고 F5 > node.js > F5로 변수의 값 확인할 수 있음

let i = 0; // i 변수에 0 할당(=저장 =대입)
console.log(i); // 0, 화면에 i 변수의 값을 출력
i = i + 1; // i 변수의 값에 1을 더해서 다시 i 변수에 할당
console.log(i); // 1
i = i + 1;
console.log(i); // 2
i = i + 1;
console.log(i); // 3
i = i + 1;
console.log(i); // 4 

// 자동완성 코드조각 설정
// File > 일반설정 > 코드 조각 구성 > javascript 검색
//  prefix, body 설정
console.log('');
alert('');