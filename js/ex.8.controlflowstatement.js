// 제어문(조건문, 반복문 실습)

// 1. 1부터 100까지 짝수의 합을 구해서 출력
let sum = 0;
for (let i = 1; i < 101; i++) {
    if(i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);

console.log('-----------------------------');


// 2. 1부터 100까지 7의 배수 중 50보다 큰 수들을 구해서 출력
for(let i = 1; i <101; i++){
    if(i % 7 == 0 && i > 50){
        console.log(i);
    }
}

console.log('-----------------------------');

// 3. 1부터 1000까지 홀수의 개수와 짝수의 개수를 각각 출력
let odd = 0;
let even = 0;
for(let i = 1; i < 1001; i++){
    if(i % 2 == 0){
        even += 1;
    } else {
        odd += 1;
    }
}
console.log(`홀수의 개수 ${odd}`);
console.log(`짝수의 개수 ${even}`);


console.log('-----------------------------');

// 4. 1부터 1000까지 제곱수만 출력
// (제곱수 : 정수를 제곱한 수, 1, 4는 제곱수, 2, 3은 제곱수 아님)
for (let i = 1; i*i <= 1000; i++) {
    console.log(i*i);
}

console.log('-----------------------------');

// 5. 윤년 판별
// (윤년 : 4로 나눈 나머지가 0이면서 100으로 나눈 나머지가 0이 아니거나 400으로 나눈 나머지가 0인 경우)
let year = 2134;
if(year % 4 == 0 && year % 100 != 0 && year % 400 == 0){
    console.log('윤년입니다');
} else {
    console.log('윤년이 아닙니다.');
}

console.log('-----------------------------');

// 6. 세 수 중 가장 큰 수를 출력
let a = 23;
let b = 47;
let c = 50;

const mostBigNumber = a >b ? ( a > c ? a : c ) : ( b > c ? b :  c);
console.log(mostBigNumber);

console.log('-----------------------------');

// 7. 팩토리얼 계산해서 출력
// 팩토리얼 : 1부터 해당 수까지 곱한 수
// ex) 5팩토리얼 = 1 * 2 * 3 * 4 * 5
let fact = 7;
let total = 1;
for(let i = 0; i < fact; i++){
    total *= (fact-i);
}
console.log(total);

console.log('-----------------------------');

// 문자 가로로 출력하기 : Node 환경에서만 작동
// process.stdout.write('A')
// process.stdout.write('B')
// process.stdout.write('C')

// console.log('-----------------------------');

// 8. 구구단 중 5단 출력
for (let i = 1; i < 10; i++) {
    let five = 5 * i
    process.stdout.write(`5*${i}=${five} `)
}

console.log('\n -----------------------------');

// 9. 구구단 전체 출력
for (let i = 2; i < 10; i++){
    console.log('\n');
    
    for(let j = 1; j < 10; j++){
        process.stdout.write(`${i}*${j}=${i * j} `);             
    }
}

console.log('\n -----------------------------');

//10. 구구단 중에서 짝수 단만 출력, 단 곱해지는 수가 3의 배수인 경우
for (let i = 2; i < 10; i++){
    console.log('\n');
    
    if(i % 2 == 0){
        for(let j = 1; j < 10; j++){
            if(j % 3 == 0){
                process.stdout.write(`${i}*${j}=${i * j} `);             
            }
        }       
    }    
}

