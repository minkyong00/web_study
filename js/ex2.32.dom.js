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
const errorMsg = document.getElementById('errorMsg');

let count = 1;

// 추가
addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.setAttribute('data-order', count);
    li.textContent = count++;
    list.appendChild(li);
});

// 삭제
removeButton.addEventListener('click', () => {
    const removeLi = list.lastElementChild;
    list.removeChild(removeLi);
});

// 초기화
initButton.addEventListener('click', () => {
    const initLi = list.querySelectorAll('li');
    list.remove(initLi);
});

// 번호 선택 삭제
inputRemoveButton.addEventListener('click', () => {
    const li = list.querySelectorAll('li');
    
    for(let i=0; i<li.length; i++){
        if(li[i].textContent == itemInput.value) {
            // console.log(li[i].textContent);
            // console.log(itemInput.value);
            
            li[i].remove();
            errorMsg.textContent = `${li[i].textContent}가(이) 삭제되었습니다`;
        } else if (li[i].textContent != itemInput.value) {
            errorMsg.textContent = '일치하는 숫자가 없습니다';
        }
    }

    // document.querySelectorAll('li') : 모든 li요소를 NodeList로 반환
    // ...document.querySelectorAll('li') : 스프레드
    // [...document.querySelectorAll('li')] : 모든 li요소를 요소로 갖는 배열
    //                                        => Array.from(document.querySelectorAll('li'))
    // find : 콜백함수의 조건에 맞는 요소 반환
    // li => li.dataset.order == text.value : li요소 중에서 data-order가 입력한 값과 같은 li
    // const remveLi = [...document.querySelectorAll('li')]
    //                     .find(li => li.dataset.order == text.value);
    // 삭제할 li가 존재한다면 제거
    // if(remveLi) list.removeChild(remveLi);
});



