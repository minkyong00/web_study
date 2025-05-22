// 정규표현식 실습

// 1. 문자열에서 모든 숫자를 찾아 배열로 반환
// 결과 : ['2025', '1', '15]
const str1 = '오늘은 2025년 1월 15일 입니다.';
console.log(str1.match(/\d{1,4}/g));
console.log(str1.match(/\d+/g));

// 2. 주어진 문자열에서 모든 공백을 제거
// 결과 : HelloWorld!
const str2 = "Hello   World!";
console.log(str2.replace(/\s+/g, ''));


// 3. 문자열에 'JavaScript'라는 단어가 포함되어 있는지 확인
// 결과 : true
const sentence = "I am learning JavaScript and it's fun!";
const regexp1 = /JavaScript/g;
console.log(regexp1.test(sentence));


// 4. 주어진 문자열이 올바른 전화번호 형식인지 확인
// 결과 : true
const phone = "010-1234-5678";
const regexp2 = /^\d{3}-\d{4}-\d{4}$/g;
console.log(regexp2.test(phone));


// 5. 문자열에서 모든 URL을 추출
// 결과 : ['https://google.com', 'http://example.com']
const text1 = "Visit https://google.com and http://example.com!";
// console.log(text1.match(/https?:\/\/\d{6,7}.\d{3}/g));
console.log(text1.match(/https?:\/\/[^\s|!]+/g));
// / =? \/



// 6. 주어진 문자열에서 숫자와 알파벳만 추출
// 결과 : 'Hello123World456'
const str3 = "Hello123!@#World456";
console.log(str3.replace(/[!@#]/g, ''));
console.log(str3.replace(/[^a-zA-Z0-9]/g, ''));


// 7. 문자열에서 소수점 두 자리까지의 실수를 모두 추출하세요.
// 결과 : ['12.50', '100.99']
const text2 = "The prices are 12.50, 100.99, and 3.5 dollars.";
console.log(text2.match(/\d+\.\d{2}/g)); // [ '12.50', '100.99' ]
console.log(text2.match(/\d+\.[^\s]+/g)); //[ '12.50,', '100.99,', '3.5' ]


// 전방탐색(Lookahead)
// X(?=Y) : X 뒤에 Y가 존재하는 경우에만 X를 매칭, Y는 포함되지 않음

// 8. 숫자 뒤에 '원'이 오는 경우만 추출
// 결과 : ['1000', '3000']
const t1 = '1000원, 2000달러, 3000원, 400엔';
console.log(t1.match(/\d+(?=원)/g));



// 9. 한글 이름들만 추출하여 배열 출력 (한글이름은 2글자~4글자로 제한)
// 결과 : ['김철수', '이은', '최고길동']
const t2 = ['김철수', '이은', '박', '123홍길동', '최고길동'];
console.log(t2.filter(ele => ele.match(/^[가-힣]{2,4}$/g)));
console.log(t2.filter(ele => /^[가-힣]{2,4}$/g.test(ele)));



// 10. 영문자와 숫자를 모두 포함하고 6글자 이상인 비밀번호들만 추출하여 배열 출력
// 결과 : ['abc123', 'abcDEF789']
// (?=.*[a-zA-Z]) : 영문자가 1개 이상 있어야 함, .(한 문자) *(이상 포함되어야함)
// (?=.*\d) : 숫자가 1개 이상 있어야 함
const password = ['abc123', 'password', 'abcDEF789', '123456', 'abc!'];
console.log(password.filter(ele => ele.match(/^\w{6,}$/g))); // [ 'abc123', 'password', 'abcDEF789', '123456' ]
console.log(password.filter(ele => ele.match(/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/g)));
console.log(password.filter(ele => /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/g.test(ele)));
