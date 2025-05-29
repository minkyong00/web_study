// 이벤트 실습2 : 배경색 변경

// outer 클릭 시 outer 배경색상 임의색상으로 변경
// inner 클릭 시 outer, inner 배경색상 임의색상으로 변경
// btn 클릭 시 btn, outer, inner 배경색상 임의색상으로 변경
// 랜덤 색상 rgb(0~255)

const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');

// 랜덤색상 함수
const getRandomColor = function() {
    return `rgb(
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)}
    )`;
};


outer.addEventListener('click', e => {
    // 전에 있던 inner 색상을 저장하여 outer 누를 때 inner 색상 다시 적용
    const prevInnerBackColor = inner.style.backgroundColor ? inner.style.backgroundColor : 'rgb(255, 255, 255)'
    if(outer) {
        inner.style.backgroundColor = prevInnerBackColor;
        outer.style.backgroundColor = getRandomColor();

    }
});

inner.addEventListener('click', e => {
    inner.style.backgroundColor = getRandomColor();
});

btn.addEventListener('click', e => {
    btn.style.backgroundColor = getRandomColor();
});

