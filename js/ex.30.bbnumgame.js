// ex.30.bbnumgame.js

// Node환경에서 사용자 키보드 입력 받기
// 1. 터미널 실행 (Ctrl + `)
// 2. 보안 정책 변경 : Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
// 3. readline모듈 설치 : npm install -g readline
// 파일 실행 : node 파일명


// rl.question("문자를 입력하세요! ", (answer) => {
//   console.log(`입력하신 문자 : ${answer}`);
//   rl.close();
// });


// 실습 : 숫자야구게임

// 게임규칙
// 1. 사용자에게 게임난이도를 선택하게 한다.
//  - 난이도 1:숫자 2개, 난이도 2:숫자 3개, 난이도 3:숫자 4개
// 2. 컴퓨터는 난이도에 따라 임의의 중복되지 않는 1~9 숫자를 생성한다.
// 3. 사용자가 숫자를 입력한다.
// 4. 컴퓨터의 숫자와 사용자 입력 숫자가 자리수별로 맞으면 스트라이크 자리수가 틀리지만 맞으면 볼
//     ex)
//     난이도가 1이고 컴퓨터의 숫자가 23, 사용자 입력 숫자가 23인 경우 2스트라이크
//     난이도가 1이고 컴퓨터의 숫자가 23, 사용자 입력 숫자가 25인 경우 1스트라이크
//     난이도가 1이고 컴퓨터의 숫자가 53, 사용자 입력 숫자가 23인 경우 1스트라이트
//     난이도가 1이고 컴퓨터의 숫자가 53, 사용자 입력 숫자가 32인 경우 1볼
//     난이도가 1이고 컴퓨터의 숫자가 53, 사용자 입력 숫자가 35인 경우 2볼
// 5. 사용자는 2스트라이크로 게임이 종료될때 까지 계속 게임을 진행한다.
// 6. 게임이 완료되면 몇번 시도로 맞추었는지 화면에 표시한다.

// 출력 예시
// 게임난이도를 선택하세요(1~3) : 1 (<화면에 보이면 안됨>컴퓨터 예상숫자:23)
// 예상숫자를 입력하세요 : 78
// 결과 : 꽝
// 예상숫자를 입력하세요 : 32
// 결과 : 2볼
// 예상숫자를 입력하세요 : 23
// 결과 : 2스트라이크
// 시도회수 3회에 성공!

// 컴퓨터 랜덤 숫자
const getComNums = level => {
    const comNums = [];
    while (comNums.length != (+level)+1) {
      const randomNum = Math.floor(Math.random()*9) + 1;
      if (!comNums.includes(randomNum)) comNums.push(randomNum);
    }
    return comNums;
  };
  
  // Fisher–Yates Shuffle 알고리즘
//   const shuffleArray = arr => {
//     for (let i=arr.length-1; i>0; i--) {
//       const j = Math.floor(Math.random()*(i+1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   };

  // 결과 연산 함수
  const getResult = (comNum, userNum) => {
    let strikeCount = 0;
    // 반복문에서 스트라이크도 포함되므로 볼 카운트에서 스트라이크 카운트 빼줌
    let ballCount = strikeCount - 0;

    for(let i = 0; i<comNum.length; i++){
        // 컴퓨터 숫자와 사용자 입력 숫자의 
        // 같은 인덱스의 숫자가 같을 경우 스트라이크 카운트 1증가
        if(comNum[i] == userNum[i]) strikeCount++;
        else {
            for(let j = 0; j<userNum.length; j++){
                // 사용자의 숫자를 j번 돌 때
                // 컴퓨터 숫자와 맞는 경우 볼 카운트 1증가
                if(comNum[i] == userNum[j]) ballCount++; 
            }
        }
    }
    return [strikeCount, ballCount];
  }


const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});  

// 사용자 입력 함수
function getUserInput(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

(async () => {
    const level = await getUserInput('게임 난이도를 입력하세요!(1 ~ 3) : ');
    const comNum = getComNums(level);
    const maxStrike = (+level) + 1; // 최대 스트라이크 수
    let tryCount = 0; // 시도 횟수
    
    // console.log('컴퓨터 예상 숫자: ' + comNum.join(""));
    
    while(true){
        const userNum = await getUserInput('예상 숫자를 입력하세요! : ');
        if(!/^\d+$/.test(userNum) || userNum.length !== maxStrike){
            console.log(`${maxStrike}자리 숫자를 정확히 입력해주세요!`);
            continue;
        }

        // 결과 연산
        const [strikeCount, ballCount] = getResult(comNum, userNum);
        // 시도횟수 증가
        tryCount++;

        if(strikeCount == maxStrike){
            console.log(`결과 : ${strikeCount}스트라이크`);
            console.log(`시도 횟수 ${tryCount}회에 성공!`);
            break;
        } else if(strikeCount == 0 && ballCount == 0) console.log(`결과 : 꽝`);
          else console.log(`결과 : ${strikeCount}스트라이크 ${ballCount}볼`);  
    }

    rl.close();

})();
