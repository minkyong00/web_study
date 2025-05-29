// event 실습 3

// 10행 10열의 테이블을 만들고 각 칸에 1~100의 수 중 임의의 수를 넣음
// 숫자를 2개 이상 선택하고 합계버튼을 누르면 수의 합계를 출력

// document.body.appendChild(document.createElement('table'));
// const tbody = document.createElement('tbody');
// document.querySelector('table').append(tbody);
// // document.querySelector('tr').appendChild(document.createElement('td'));
// // const td = document.querySelector('td');

// Fisher-Yates Shuffle Algorithm
function shuffleArray(arr) {
    for (let i=arr.length-1; i>0; i--) {
      const j = Math.floor(Math.random()*(i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// 랜덤 숫자 함수
const getRanNum = () => {
   return Math.floor(Math.random() * 100) + 1;
}

let arr = [];
let selArr = [];

// 랜덤 숫자 배열에 넣기
const ArrTo100 = () => {
    for(let i=0; i<100; i++){
        arr.push(getRanNum())
    };
    arr = shuffleArray(arr);
}

ArrTo100();
console.log(arr);

// td row행 만들기
// const getTd = () => {
    let table = '<table><tbody>';
    for(let i=0; i<10; i++){
        table += '<tr>';
        for(let j=0; j<10; j++){
            table += `<td>${arr[10*i + j]}</td>`;
        }
        table += '</tr>';
    }
    table += `</table></tbody>`;
// };

// getTd();

// let tableHtml = '<table><tbody>';
// for (let i=0; i<10; i++) {
//     tableHtml += '<tr>';
//     for (let j=0; j<10; j++) {
//         tableHtml += `<td>${arr[10*i+j]}</td>`;
//     }
//     tableHtml += '</tr>';
// }
// tableHtml += '</tbody></table>';






/* 2행 2열
<table>
        <tr>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
        </tr>
</table>
*/