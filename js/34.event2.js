// 이벤트 전파 (event propagation)
// Capturing(1) :  상위 엘리먼트에서 타켓 엘리먼트까지 이벤트 객체 전파
// Targetting(2) : 타켓 엘리먼트에 이벤트객체 전파
// Bubbling(3) : 타켓엘리먼트에서 상위 엘리먼트까지 이벤트객체 전파

// const ul = document.getElementById('fruits');
// ul.addEventListener('click', e => {
//     console.log(`이벤트 단계 : ${e.eventPhase}`);
//     console.log(`이벤트 타겟 : ${e.target}`);
//     console.log(`이벤트 현재타켓 : ${e.currentTarget}`);
// }, true); // true : 캡쳐링 단계에서 이벤트 처리할 지 여부

// const apple = document.getElementById('apple');
// apple.addEventListener('click', e => {
//     console.log(`이벤트 단계 : ${e.eventPhase}`);
//     console.log(`이벤트 타겟 : ${e.target}`);
//     console.log(`이벤트 현재타켓 : ${e.currentTarget}`);
// }, true); // true : 캡쳐링 단계에서 이벤트 처리할 지 여부


// 이벤트 위임 (event delegation)
const ul = document.getElementById('fruits');
ul.addEventListener('click', e => {
    // 이벤트 타켓이 li라면
    if(e.target.matches('li')) {
        // ul의 자식요소들로 배열을 생성해서 
        // 배열내 각각의 li들에서 active라는 클래스를 제거
        [...ul.children].forEach(li => li.classList.remove('active'));
        // 클릭된 li에 active라는 클래스 추가
        e.target.classList.add('active');
    }
});

// 이벤트핸들러내에서의 this
const button = document.querySelector('.btn');

// 이벤트핸들러로 일반함수를 사용하면 이벤트핸들러내에서의 this는 이벤트타겟객체
button.addEventListener('click', function() {
    console.log(this);
});

// 이벤트핸들러로 화살표함수를 사용하면 이벤트핸들러내에서의 this는 전역객체(window)
// => 화살표함수는 자체 스코프를 가지지 않고 상위스코프를 따라감
button.addEventListener('click', e => {
    console.log(this);
});

// 실습 : 위 화살표함수내에서의 this가 이벤트타켓이 되도록 구현
button.addEventListener('click', e => {
    // 화살표함수내에서의 this는 상위스코프의 this이므로 
    // 화살표함수내에서 이벤트타겟은 이벤트객체의 targer프라퍼티를 사용해야만 함
    console.log(e.target);
});

/*
    cf : 화살표 함수내에서의 this
         => 화살표 함수내에서의 this는 상위스코프의 this
    감싸는 상위스코프가 없을 경우 화살표 함수내에서의 this는 window
*/

// function Car(name) {
//     this.name = name;
//     this.getName = function() {
//         let arrow = () => { console.log('화살표함수내에서의 this : ', this); };
//         arrow();
//         return this.name;
//     };
// }

// const car = new Car('BMW');
// // console.log(car);
// car.getName(); // Car

// 커스템 이벤트(custom event) : 사용자정의 이벤트

// 커스템 이벤트 생성
// 이벤트명, 이벤트객체
const customEvent = new CustomEvent('customClick', {
    detail: { message: '내가 만든 이벤트' }
});

const customBtnDispatch = document.getElementById('customBtnDispatch');
const customBtn = document.getElementById('customBtn');

// 커스템 이벤트 처리를 위한 이벤트핸들러 등록
customBtnDispatch.addEventListener('click', e => {
    // 커스템 이벤트의 경우 커스템 이벤트 발생을 시켜줘야 함(이벤트 수동 트리거링)
    customBtn.dispatchEvent(customEvent);
})
customBtn.addEventListener('customClick', e => {
    alert(e.detail.message);
})


// 실습 : 커스템이벤트 생성 및 트리거링
// 1이라고 쓰여있는 버튼을 생성, 2라고 쓰여있는 버튼을 생성
// 1번을 클릭했을 때, 2버튼에 clickSecond이라는 커스템이벤트가 발생하도록
// clickSecond라는 커스템이벤트는 버튼의 텍스트를 읽어서 콘솔에 출력
// 출력결과 : 2
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const clickSecond = new CustomEvent('clickSecond', {
    detail: { message : btn2.textContent }
});

btn1.addEventListener('click', e => {
    // 사용자정의 이벤트를 등록
    btn2.dispatchEvent(clickSecond);
})
btn2.addEventListener('clickSecond', e => {
    console.log(e.detail.message);
    console.log(e);
    
})
