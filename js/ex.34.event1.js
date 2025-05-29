// event 실습 1 : 숫자 카운터
// 증가 버튼 클릭 시 1씩 증가
// 감소 버튼 클릭 시 1씩 감소

const inputCouter = document.querySelector('#couter');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');

let couter = 0;

const couterFunc = () => {
    document.querySelector('#couter').value = couter;
}

increase.addEventListener('click', e => {
    // inputCouter.value = +inputCouter.value + 1;
    couter++;
    couterFunc();
});

decrease.addEventListener('click', e => {
    // inputCouter.value = +inputCouter.value - 1;
    couter--;
    couterFunc();
});

// 텍스트 상자에 직접 입력 못하도록
// focus : 엘리먼트가 포커스를 받음
// blur : 엘리먼트가 포커스를 잃어버림
inputCouter.addEventListener('focus', e => {
    inputCouter.blur();
})