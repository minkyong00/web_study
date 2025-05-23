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

// 사용자, 머신 로또 번호 6자리 랜덤 추출
//
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
    // 사용자의 로또번호
    const [ userNums ] = getLottoNumbers('user');
    
    // 당첨된 등수 카운트 배열
    const countArr = new Array(6).fill(0);

    for(let i =0; i< 100000; i++){
        
        // 머신의 로또 번호
        const [ machineNums ] = getLottoNumbers('machine');
        // 머신의 보너스 번호
        const machineBonusNum = getLottoNumbers('machine')[1];
        // 머신 로또 번호와 사용자의 로또 번호가 
        // 포함되어있는 배열을 반환 후 길이(맞춘 개수) 출력
        const matchCount = machineNums.filter(num => userNums.includes(num)).length;
        // 사용자의 로또 번호안에 머신의 보너스 번호 포함 하면 true 출력
        const isBonusNum = userNums.includes(machineBonusNum);

        switch(matchCount){
            case 6 : countArr[0]++; break;
            case 5 : 
            // 맞춘 개수가 5개인 경우 보너스가 포함되어 있으면 2등 카운트 1 증가,
            // 아니면 3등 카운트 1증가
            if(isBonusNum) countArr[1]++;
            else countArr[2]; break;
            case 4 : countArr[3]++; break;
            case 3 : countArr[4]++; break;
            default : countArr[5]++;
        }
    }
    
    console.log(`사용자의 로또 번호 : ${userNums}`);
    for(let i=0; i<countArr.length; i++){
        console.log(`${(i+1)>5 ? '꽝' : (i+1) + '등 :'} ${countArr[i]}번`);
    }
}

lottoMachine();