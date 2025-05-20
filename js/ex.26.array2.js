// 배열 실습2 : 고차함수 실습

const arr1 = [1, '2', 3, '4', 5, '6', 7, '8'];

// 1. arr1 배열의 모든 요소를 숫자타입으로 변경
const arr2 = arr1.map(ele => +ele);

console.log(arr1.map(ele => +ele));


// 2. arr1 배열의 모든 요소를 3배한 배열을 출력
console.log(arr1.map(ele => ele*3));


// 3. arr1 배열의 요소 중 5의 배수가 있는지 확인
// console.log(arr1.includes());
const some1 = arr1.some(ele => ele%5 == 0)
console.log(some1);


// 4. arr1 배열의 모든 요소가 짝수인지 확인
const every1 = arr1.every(ele => ele % 2 == 0)
console.log(every1);


// 5. arr1 배열의 모든 요소의 합을 출력
const sum = arr1.reduce((acc, curr) => acc + curr);
console.log(sum);


// 6. arr1 배열에서 3의 배수들만 추출하여 배열 생성해 출력
const result = arr1.filter(ele => ele % 3 == 0);
console.log(result);

// 7. arr1 배열에서 짝수들만 추출하여 각각 3배한 배열의 합계를 출력
const result1 = arr1.filter(ele => ele % 2 == 0).map(ele => ele * 3);
console.log(result1);


const persons = [
    {name:'홍길동', age:20, address:{si:'서울시', dong:'역삼동'}},
    {name:'이길동', age:40, address:{si:'서울시', dong:'신사동'}},
    {name:'김길동', age:30, address:{si:'서울시', dong:'논현동'}},
    {name:'최길동', age:60, address:{si:'평양시', dong:'평양동'}},
    {name:'박길동', age:50, address:{si:'개성시', dong:'개성동'}}
];

// 8. 서울시에 사는 사람들의 나이의 합계를 출력
const ageSum = persons.filter(ele => ele.address.si.includes('서울시'))
                    .reduce((acc, curr) => acc + curr.age, 0);
console.log('서울시에 사는 사람들의 나이의 합계 : ' + ageSum);


// 9. 서울시에 살며 30세 이상인 사람들만 추출한 배열 출력
const age30 = persons.filter(ele => ele.age >= 30 && ele.address.si.includes('서울시'));
console.log(age30);



// 10. 각 사람의 주소 중 시이름에서 '시' 동이름에서 '동'을
//    제거하고 이름, 나이, 주소를 출력    ex) 홍길동,20세,서울 역삼
const address = persons.map(ele => ele.address).join();
console.log(address);


// sort

const people = [
    {name:'홍길동', age: 20},
    {name:'이순신', age: 40},
    {name:'강감찬', age: 30}
];

// 1. age 오름차순 / 내림차순 정렬
console.log(people.map(ele => ele).sort((a, b) => a.age - b.age));
console.log(people.map(ele => ele).sort((a, b) => b.age - a.age));



// 2. name 오름차순 / 내림차순 정렬
const fruits = ['apple', 'banana', 'pineapple', 'pear'];
console.log(fruits.sort());
console.log(fruits.sort((a, b) => (a < b ? 1 : -1)));

// 3. 문자열 길이 오름차순 / 내림차순

const nums = [5, 8, 3, 10, 1, 4];
console.log(nums.sort((a, b) => a - b));
console.log(nums.sort((a, b) => a - b).reverse());


// 4. 짝수를 앞에, 홀수를 뒤에 정렬

const nested = [[3,4], [1,2], [5,6], [0,1]];


// 5. 중첩배열의 첫번째 원소 기준 오름차순 정렬

const students = [
    {name: '홍길동', score: 65},
    {name: '이길동', score: 95},
    {name: '최길동', score: 65},
    {name: '김길동', score: 55}
];

console.log(students.map(ele => ele).sort());


// 6. 점수에 대해 내림차순 정렬, 점수가 같으면 이름에 대해 오름차순 정렬

const items = ['item20', 'item3', 'item100', 'item1'];

// 7. item 숫자 기준으로 오름차순 정렬 (item1 item3 item20 item100)

const obj = [
    {name: {fname:'길동',lname:'홍'}, age: 30},
    {name: {fname:'순신',lname:'이'}, age: 20},
    {name: {fname:'감찬',lname:'강'}, age: 40},
    {name: {fname:'영',lname:'최'}, age: 20},
    {name: {fname:'관순',lname:'유'}, age: 20}
];

// 8. 나이 기준으로 내림차순 정렬, 나이가 같으면 풀네임(lname+fname) 내림차순 정렬