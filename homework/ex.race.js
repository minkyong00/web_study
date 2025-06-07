const result = document.querySelector('#result');
const reset = document.querySelector('#reset');
const level = document.querySelector('#level');
const start = document.querySelector('#start');
const background = document.querySelector('#background');
const horse = document.querySelectorAll('.horse');
const groundWidth = parseInt(window.getComputedStyle(background).width);
const horseWidth = parseInt(window.getComputedStyle(horse[3]).width);

let isRacing = false; // 레이스 여부
let interval = [];
let ranking = []; // 랭킹 순위 
let newLeft = [0, 0, 0, 0]; // 각 말들의 left 값

// 결과 출력하는 함수
const printResult = () => {
  if(ranking.length === 4) {
    isRacing = false; // 레이스 끝
    start.disabled = true; // start 버튼 비활성화
    ranking.forEach((r, i) => {
      result.textContent += `\t${i + 1}등 : ${r + 1}레인`;
    })
  }
}

// 말 1, 2, 3 랜덤하게 움직이는 함수
const startHorse = (time, i) => {
  interval[i] = setInterval(() => {
    newLeft[i] += (Math.floor(Math.random() * 10) + 1);
    horse[i].style.left = newLeft[i] + 'px';
    if(horseWidth + newLeft[i] >= groundWidth){
      horse[i].style.left = (groundWidth - horseWidth) + 'px';
      if(!ranking.includes(i)){
        ranking.push(i);
      }
      clearInterval(interval[i]);
      printResult();
    }
  }, time);
};


start.addEventListener('click', e => {
  if(isRacing) return; // 레이스중이면 중복 시작 방지
  isRacing = true; // 레이스 시작으로 변경

  level.disabled = true; // start 버튼 비활성화

  switch(level.value){
    case 'herd':
      startHorse(40, 0);
      startHorse(40, 1);
      startHorse(40, 2);
    break;
    case 'medium':
      startHorse(50, 0);
      startHorse(50, 1);
      startHorse(50, 2);
    break;
    case 'easy':
      startHorse(60, 0);
      startHorse(60, 1);
      startHorse(60, 2);
    break;
  }  
});

addEventListener('keyup', e => {
  const currLeft4 = parseInt(window.getComputedStyle(horse[3]).left);
  
  if(!isRacing) return; // 레이스 중일 때는 무시
  
  if(e.code === 'Space'){
    
    const newLeft4 = currLeft4 + 20;
    
    if(horseWidth + newLeft4 >= groundWidth){
      horse[3].style.left = (groundWidth - horseWidth) + 'px';
      if(!ranking.includes(3)){
        ranking.push(3);
      }
      printResult();

    } else {
      horse[3].style.left = newLeft4 + 'px';
    }
    
  } 
});

reset.addEventListener('click', e => {
  isRacing = false;
  newLeft = [0, 0, 0, 0];
  interval = [];
  ranking = [];
  level.disabled = false;
  start.disabled = false;
  for (let i = 0; i < 4; i++) {
    horse[i].style.left = 0;
  }
  result.textContent = '';
});
