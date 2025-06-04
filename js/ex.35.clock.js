// 실습 : 디지털 시계

// 작동 버튼 클릭하면 1초씩 디지털 시계가 움직임
// 중지 버튼 클릭하면 디지털 시계가 중지
// clock이라는 id를 가진 p요소내에 아래 형식으로 출력
// 형식 : XXXX년 XX월 XX일 오전/오후 XX시 XX분 XX초

const clock = document.querySelector('#clock');

const date = new Date();
let hours = date.getHours();
let clockTo12 = hours >= 12 ? '오후' : '오전';

let interval;
document.querySelector('#start').addEventListener('click', e => {
    interval = setInterval(() => {
        let nowStr = `
            ${date.getFullYear()}년 ${date.getMonth() + 1}월 
            ${date.getDay() + 1}일 ${clockTo12} ${hours}시 
            ${date.getMinutes()}분 ${date.getSeconds()}초`;
        clock.innerHTML = nowStr;
    }, 1000);
});

document.querySelector('#stop').addEventListener('click', e => {
    clearInterval(interval);
});