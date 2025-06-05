/*
    REST(REpresentational State Transfer)
    1. JSON서버 구동
    2. 기능
       1) 데이터 가져오기 버튼 누르면 테이블에 전체 데이터 표시(GET /persons)
       2) id, name, age 입력하고 등록버튼 누르면 테이블에 데이터 추가 (POST /persons)
       3) 각 행의 데이터를 수정하고 수정버튼 누르면 "수정하시겠습니까?" 확인 후 
          데이터를 수정 (PUT /persons/아이디)
       4) 각 행의 삭제버튼 누르면 "삭제하시겠습니까?" 확인 후 데이터를 삭제 (DELETE /presons/아이디)
*/

const listPerson = document.querySelector('#listPerson');
const getPerson = document.querySelector('#getPerson');
const pid = document.querySelector('#pid');
const pname = document.querySelector('#pname');
const page = document.querySelector('#page');
const registPerson = document.querySelector('#registPerson');
const tbody = document.querySelector('tbody');
const sel = document.querySelector('#sel');
const asc = document.querySelector('#asc');
const desc = document.querySelector('#desc');

// 응답 데이터를 저장할 배열
let responseArr = null;

// 출력 함수
const printList = (responseArr, selValue, sort) => {
    if (selValue) {
        if (selValue === 'age') {
            responseArr.sort((obj1, obj2) => {
                if (sort==='ASC') {
                    return parseInt(obj1[selValue]) - parseInt(obj2[selValue]);
                } else if (sort==='DESC') {
                    return parseInt(obj2[selValue]) - parseInt(obj1[selValue]);
                }
            });
        } else {
            responseArr.sort((obj1, obj2) => {
                if (sort==='ASC') {
                    return obj1[selValue].localeCompare(obj2[selValue]);
                } else if (sort==='DESC') {
                    return obj2[selValue].localeCompare(obj1[selValue]);
                }
            });
        }
    }
    tbody.textContent = '';    
    for (let obj of responseArr) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${obj.id}</td>
            <td><input id="name${obj.id}" type="text" value="${obj.name}" class="pname"></td>
            <td><input id="age${obj.id}" type="text" value="${obj.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${obj.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${obj.id}');">삭제</button>
            </td>
        `;
        tbody.appendChild(tr);
    }    
};

// 정렬
asc.addEventListener('click', e => {
    printList(responseArr, sel.value, 'ASC'); 
});

desc.addEventListener('click', e => {
    printList(responseArr, sel.value, 'DESC'); 
});

// 데이터 가져오기 (모두 조회)
listPerson.addEventListener('click', e => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:7777/persons');
    xhr.send();
    // 요청이 성공하면 콜백 수행
    xhr.onload = () => {
        // 응답 JSON문자열을 객체(배열)로 변환
        responseArr = JSON.parse(xhr.response);
        // 배열을 테이블에 출력
        printList(responseArr);
    };
});

// 한건 조회
getPerson.addEventListener('click', e => {
    const xhr = new XMLHttpRequest();
    const sid = document.querySelector('#sid');
    if(!sid.value){
        alert('검색하실 아이디를 입력해주세요!');
        sid.focus();
        return;
    }
    xhr.open('GET', `http://localhost:7777/persons/${sid.value}`);
    xhr.send();
    xhr.onload = () => {
        tbody.textContent = '';
        const person = JSON.parse(xhr.response);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${person.id}</td>
            <td><input id="name${person.id}" type="text" value="${person.name}" class="pname"></td>
            <td><input id="age${person.id}" type="text" value="${person.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${person.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${person.id}');">삭제</button>
            </td>
        `;
        tbody.appendChild(tr); 
    };
});

// 등록
registPerson.addEventListener('click', e => {
    // 실습 구현
    const xhr = new XMLHttpRequest();
    const input = { "id": pid.value, "name": pname.value, "age": page.value };
    xhr.open('POST', 'http://localhost:7777/persons', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(input));
    xhr.onload = () => {
        responseArr = JSON.parse(xhr.response);
        printList(responseArr);
    };
});

// 수정
const modifyPerson = pid => {
    // 실습 구현
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `http://localhost:7777/persons/${pid}`);
    const modifyName = document.querySelector(`#name${pid}`);
    const modifyAge = document.querySelector(`#age${pid}`);
    xhr.send(JSON.stringify({
        "name" : modifyName.value,
        "age" : modifyAge.value
    }));
    xhr.onload = () => {
        alert('수정하시겠습니까?');
        printList(responseArr);
    };
};

// 삭제
const deletePerson = pid => {
    // 실습 구현
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `http://localhost:7777/persons/${pid}`);
    xhr.send();
    xhr.onload = () => {
        alert('삭제하시겠습니까?');
        printList(responseArr);
    }
};

