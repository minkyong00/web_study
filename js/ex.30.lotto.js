//J/S 로또 프로그램 구현

// 1. 사용자의 로또번호 6개를 랜덤하게 추출한다.
// 2. 로또 추첨을 100만번 수행한다. ( 추첨: 로또번호 6개 + 보너스번호 1개)
// 3. 사용자의 등수별 당첨횟수를 출력
// * 1등 : 6개 번호가 모두 맞은 경우
//   2등 : 5개 번호가 맞고 보너스 번호가 맞은 경우
//   3등 : 5개 번호가 맞은 경우
//   4등 : 4개 번호가 맞은 경우
//   5등 : 3개 번호가 맞은 경우
//   나머지 "꽝 다음기회에!"


// 출력형식
// 사용자의 로또 번호 : 3 12 23 24 35 45
// 1등 : 1번, 2등: 3번, 3등:100번, 4등: 500번, 5등 : 1000번 


// 로또 정답 번호
// while(lottoNumSet.size < 7) {
//     lottoNumSet.add(Math.floor(Math.random() * 45) + 1);
// }
// console.log(lottoNumSet);

// 사용자 로또 번호
// const userNumSet = new Set();
// while(userNumSet.size < 6) {
//     userNumSet.add(Math.floor(Math.random() * 45) + 1);
// }
// console.log(userNumSet);

const getLottoNumbers = user => {
    const lottoNumSet = new Set();
        while(lottoNumSet.size < 6 ) {
            lottoNumSet.add(Math.floor(Math.random() * 45) + 1);
        }
        let bonusNum = 0;
        if(user =='machine'){
            while(true){
                if(!lottoNumSet.has(bonusNum)) {
                    bonusNum = Math.floor(Math.random() * 45) + 1;
                    break;
                }
            }
        }
        return [Array.from(lottoNumSet).sort((a, b) => a-b), bonusNum];
}

// console.log(getLottoNumbers('user'));
// console.log(getLottoNumbers('machine'));

const lottoMachine = () => {
    const [userNums] = getLottoNumbers('user');
    
    let count1 = 0; //1등
    let count2 = 0; //2등
    let count3 = 0; //3등
    let count4 = 0; //4등
    let count5 = 0; //5등
    let fail = 0; // 꽝

    for(let i =0; i< 2000; i++){
    // console.log(machineNums);
    // console.log(userNums);
    
    const [machineNums] = getLottoNumbers('machine');
    const machineBonusNum = getLottoNumbers('machine')[1];
    // console.log(machineBonusNum);
    

    const matchCount = machineNums.filter(num => userNums.includes(num)).length;
    const bonusNumCount = userNums.includes(machineBonusNum);
    // console.log(matchCount);
    // console.log(bonusNumCount);

    
    

    if(matchCount === 6){
        count1++;
    } else if(matchCount == 5 && bonusNumCount){
        count2++;
    } else if(matchCount === 5){
        count3++;
    } else if(matchCount === 4){
        count4++;
    } else if (matchCount === 3){
        count5++;
    } else {
        fail++;
    }
}

    console.log(`사용자의 로또 번호 : ${userNums}`);
    console.log(`1등 : ${count1}번, 2등: ${count2}, 3등:${count3} 4등: ${count4}번, 5등 : ${count5}번, 꽝 : ${fail}번`);
    
}

lottoMachine();
