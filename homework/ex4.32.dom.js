// jQuery

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

// 데이터 불러오기
$('#loadBtn').click(e => {
    $('tbody').empty();
    addFunc(data);
});

// 데이터 초기화
$('#initBtn').click(e => {
    initFunc();
});

// 총점 출력
$('#sumBtn').click(e => {
    $('tfoot').empty();
    printSum(calcSum(data));
});

// 번호순 정렬
$('#sortBtn').click(e => {
    sortFunc();
});

// 동적으로 데이터 추가
$('#addBtn').click(e => {
    $('tbody').empty();
    inputAddFunc();
});

// 동적 데이터 추가
const inputAddFunc = () => {
    let id = data.length;
    data.push({
        id: ++id,
        name: $('#name').val(),
        kor: parseInt($('#kor').val()),
        eng: parseInt($('#eng').val()),
        math: parseInt($('#math').val())
    });
    addFunc(data);
};

// 번호 정렬
const sortFunc = () => {
    // tr에 데이터 있는 지 확인
    if($('tbody tr').length === 0) return;

    $('tbody').empty();
    addFunc(data.reverse());
};

// 합계 연산
const calcSum = data => {
    let sumArr = [0, 0, 0];
    for(let ele of data){
        sumArr[0] += ele.kor;
        sumArr[1] += ele.eng;
        sumArr[2] += ele.math;
    }
    return sumArr;
};

// 합계 출력
const printSum = sumArr => {
    $('tfoot').empty();
    const tr = $('<tr></tr>')
    tr.append("<td colspan='2'>과목 총점</td>");
    for(let sum of sumArr){
        tr.append($('<td></td>').text(sum));
    }
    $('tfoot').append(tr);
};

// 데이터 초기화 함수
const initFunc = () => {
    $('tbody').remove();
    $('tfoot').remove();
};

// 데이터 추가 함수
const addFunc = data => {

    for(let ele of data){
        const tr = $('<tr></tr>');

        // 객체 순회 for in
        for(let i in ele){
            tr.append($('<td></td>').text(ele[i]));
        }

        // 선택 행 삭제
        const deleteBtn = $('<button>삭제</button>').click(e => {
            tr.remove();
            printSum(calcSum(data));
        });
        const td = $('<td></td>').append(deleteBtn);
        tr.append(td);

        $('tbody').append(tr);
    }
};