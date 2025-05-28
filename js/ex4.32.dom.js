// dom 실습 4

/*
  기본데이터
  1 홍길동 100 100 100
  2 강감찬 90 90 90
  3 이순신 80 80 80

  데이터초기화 버튼을 클릭하면 표시된 데이터를 화면에서 삭제
  데이터불러오기 버튼을 클릭하면 기본데이터를 tbody에 표시
  총점출력 버튼을 클릭하면 총점을 연산하여 tfoot에 출력
  * 선택구현
    1. 번호순정렬버튼 - 한번 클릭시 번호순 내림차순 정렬, 두번 클릭시 번호순 오름차순 정렬
    2. 데이터추가버튼 
      - 데이터를 추가할 수 있는 UI를 동적으로 생성하고 데이터추가버튼 클릭시 tbody내에 추가
      - 데이터 추가시 총점 연산하여 반영
*/


const data = [
    {id: 1, name: '홍길동', kor: 100, eng: 80, math: 100},
    {id: 2, name: '강감찬', kor: 70, eng: 90, math: 60},
    {id: 3, name: '이순신', kor: 20, eng: 30, math: 50},
];

const initBtn = document.querySelector('#initBtn');
const loadBtn = document.querySelector('#loadBtn');
const sumBtn = document.querySelector('#sumBtn');
const sortBtn = document.querySelector('#sortBtn');
const addBtn = document.querySelector('#addBtn');


let isResult = true;
const inputId = document.querySelector('#id');
const inputName = document.querySelector('#name');
const inputKor = document.querySelector('#kor');
const inputEng = document.querySelector('#eng');
const inputMath = document.querySelector('#math');

// 데이터 td에 저장하는 함수
const addFunc = () => {

    for(let rowData of data){
        const eachRow = `
            <tr>
                <td>${rowData.id}</td>
                <td>${rowData.name}</td>
                <td>${rowData.kor}</td>
                <td>${rowData.eng}</td>
                <td>${rowData.math}</td>
                <td>
                    <button class='delete' data-id='${rowData.id}'>삭제</button>
                </td>
            </tr>
        `
        document.querySelector('tbody').innerHTML += eachRow;
    }

    // 각 행 삭제
    const deleteBtns = document.querySelectorAll('.delete');
    console.log(deleteBtns);

    deleteBtns.forEach(button => {
        button.addEventListener('click', e => {
            for(let rowData of data){
                if(e.target.dataset.id == rowData.id ){
                    document.querySelector('tr').remove();
                }
            }            
        })
});


};

// 데이터 초기화 함수
const removeFunc = () => {
    document.querySelector('tbody').remove();
    document.querySelector('tfoot').remove();
};

// 각 과목별 총점 출력하는 함수
const eachSumFunc = () => {
    let korSum = 0;
    let engSum = 0;
    let mathSum = 0;
    for(let ele of data){
        korSum += ele.kor;
        engSum += ele.eng;
        mathSum += ele.math;
    }
    const sumRow = `
        <tr>
            <td colspan = '2'>과목 총점</td>
            <td>${korSum}</td>
            <td>${engSum}</td>
            <td>${mathSum}</td>
        </tr>
    `;
    document.querySelector('tfoot').innerHTML += sumRow;
};

// 번호순정렬 함수
const sortFunc = () => {
    const sortData = data.sort((a, b) => a > b ? 1 : -1);
    for(let rowData of sortData) {
        const eachRow = `
            <tr>
                <td>${rowData.id}</td>
                <td>${rowData.name}</td>
                <td>${rowData.kor}</td>
                <td>${rowData.eng}</td>
                <td>${rowData.math}</td>
            </tr>
        `
        document.querySelector('tbody').innerHTML += eachRow;
    }
};

let count = 4;

// 동적으로 데이터 추가 함수
const inputAddFunc = () => {
    
    const newData = {
        id: count++,
        name: inputName.value,
        kor: (+inputKor.value),
        eng: (+inputEng.value),
        math: (+inputMath.value)
    };
    // console.log(newData);

    data.push(newData);
    addFunc();
};


// 데이터 불러오기
loadBtn.addEventListener('click', () => {
    document.querySelector('tbody').innerHTML = '';
    addFunc();    
});

// 데이터 초기화
initBtn.addEventListener('click', removeFunc);

// 총점 출력
sumBtn.addEventListener('click', () => {
    document.querySelector('tfoot').innerHTML = '';
    eachSumFunc();    
});

// 번호순정렬버튼 - 한번 클릭시 번호순 내림차순 정렬, 두번 클릭시 번호순 오름차순 정렬
sortBtn.addEventListener('click', () => {
    document.querySelector('tbody').innerHTML = '';
    sortFunc();
});

// 데이터추가버튼 
// - 데이터를 추가할 수 있는 UI를 동적으로 생성하고 데이터추가버튼 클릭시 tbody내에 추가
// - 데이터 추가시 총점 연산하여 반영

addBtn.addEventListener('click', () => {
    document.querySelector('tbody').innerHTML = '';
    inputAddFunc();
});



