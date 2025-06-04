// 실습 : 경주

// 경주시작 버튼을 누르면 경주가 시작되고 소요시간이 증가
// 스페이스바를 누르면 경주마가 10px씩 우측으로 이동
// 우측 결승라인에 도달하면 경주 소요시간을 경주시작 버튼 우측에 표시

const img = document.querySelector('img');
const time = document.querySelector('#time');
const ground = document.querySelector('#ground');

let elapsedtime = 0;
let interval;
let isRace = false;


document.querySelector('#start').addEventListener('click', e => {
    if(isRace) return; // 이미 경주중이면 다시 클릭안되게 함
    isRace = true;

    interval = setInterval(() => {
        time.innerHTML = `소요시간: ${elapsedtime = elapsedtime + 50}ms`;
    }, 50);


});

addEventListener('keyup', e => {
    const currLeft = window.getComputedStyle(img).left;
    const currLeftNum = parseInt(currLeft.substring(0, currLeft.indexOf('px')));
    const groundWidth = window.getComputedStyle(ground).width;
    const groundWidthNum = parseInt(groundWidth.substring(0, groundWidth.length -2));
    const imgWidth = parseInt(window.getComputedStyle(img).width);
    
    if(!isRace) return; // 경주 중이 아니면 아래 코드 실행안됨
    
    if(e.code === 'Space'){
        const newLeft = currLeftNum + 30;
        // 말의 왼쪽 위치와 말 이미지 넓이를 더한 값이
        // 그라운드 넓이보다 클경우
        if(newLeft + imgWidth >= groundWidthNum){
            // (그라운드 - 이미지 넓이)와 이미지 왼쪽 넓이를 같게하여
            // 그라운드 오른쪽 끝에 고정시킴
            img.style.left = (groundWidthNum - imgWidth) + 'px'; 
            clearInterval(interval);
            isRace = false;
            time.textContent = `결승선 도착! 소요시간: ${elapsedtime}ms`;
            e.preventDefault(); // 스페이스 이벤트 멈춤
        } else {
            img.style.left = newLeft + 'px';
        }
    };
});

