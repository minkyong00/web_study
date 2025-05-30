// event실습 4 : 폼 필드 검증 (form field validation)

// 전송버튼을 클릭하면...
// 1. 아이디, 비밀번호는 12자 이하, 필수입력, 중간에 공백이 없도록
// 2. 성별은 필수체크
// 3. 취미는 2개 이상 선택
// 4. 자기소개 필수 입력
// 조건을 모두 만족하면 '폼이 전송되었습니다!' alert
// 그렇지 않으면 해당 필드에 포커스
const myForm = document.querySelector('form');
myForm.addEventListener('submit', e => {

  const input = document.querySelectorAll('input');
  let idVal = document.querySelector("input[name='uid']");
  let pwVal = document.querySelector("input[name='upass']");
  const idReg = /^\w\S{1,12}$/;

  if(!idVal.value.trim() || !pwVal.value.trim()){
    alert('아이디와 비밀번호를 입력하세요'); return false;
  } else if(idVal.value.trim().includes(' ') || pwVal.value.trim().includes(' ')){
    alret('아이디와 비번은 공백문자를 포함할 수 없습니다!'); return false;
  } else {
    if(!idReg.test(idVal.value) || !idReg.test(pwVal.value)){
      alert('12자 이하를 입력하세요');
      idVal.focus(); return false;
    }
  }

  // radio 중에 체크된 radio
  const gender = document.querySelector("input[name='gender']:checked");
  if(!gender) {
    alert('성별을 체크하세요!'); return;
  }

  const hobbys = document.querySelectorAll("input[type='checkbox']");
  let hobbyCount = 0;
  for(let hobby of hobbys) { // 체크박수의 수만큼 반복
    if(hobby.checked) { // 체크박스가 체크되어 있다면 체크박스의 수
      hobbyCount++;
    }
  };
  if(hobbyCount < 2){
    alert('취미를 2개이상 선택하세요!'); 
    return;
  }

  const intro = document.querySelector("textarea[name='intro']");
  if(!intro.value) {
    alert('자기소개를 입력해주세요!');
    intro.focus();
    return;
  }

  alert('폼이 전송되었습니다!');
  
});
