// DOM 실습2

// 추가 버튼을 누르면 리스트에 아이템을 하나 추가
// 삭제 버튼을 누르면 리스트에서 마지막 아이템을 하나 삭제
// 초기화 버튼을 누르면 리스트에서 모든 아이템을 삭제
// 아이템의 텍스트는 1부터 2, 3, 4 ...


const list = document.querySelector('#list');
const addButton = document.querySelector('#add');
const removeButton = document.querySelector('#remove');
const initButton = document.querySelector('#init');
const inputRemoveButton = document.querySelector('#inputRemove');
const itemInput = document.querySelector('#itemInput');
const li = document.createElement('li');

let count = 1;
let id = 1;

addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = count++;
    // li.dataset.id = id++;
    li.id = id++;
    list.appendChild(li);
});

removeButton.addEventListener('click', () => {
    const removeLi = list.lastElementChild;
    list.removeChild(removeLi);
});

initButton.addEventListener('click', () => {
    const initLi = list.querySelectorAll('li');
    list.remove(initLi);
});

inputRemoveButton.addEventListener('click', () => {
    const li = document.querySelector();
    console.log(li.textContent);
    
    if(li.textContent == itemInput.value) {
        const selectRemove = list.querySelector(`li[data-id='${itemInput.value}']`);
        list.removeChild(selectRemove);
    }
});




