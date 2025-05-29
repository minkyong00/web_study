// event실습 4 : 폼 필드 검증 (form field validation)

// 전송버튼을 클릭하면...
// 1. 아이디, 비밀번호는 12자 이하
// 2. 성별은 필수체크
// 3. 취미는 2개 이상 선택
// 조건을 모두 만족하면 '폼이 전송되었습니다!' alert
// 그렇지 않으면 해당 필드에 포커스
const myForm = document.querySelector('form');
myForm.addEventListener('submit', e => {

  const input = document.querySelectorAll('input');
  let idVal = document.querySelector("input[name='uid']").value;
  let pwVal = document.querySelector("input[name='upass']").value;
  const idReg = /^\w{1,12}$/;

  if(!idVal || !pwVal){
    alert('아이디와 비밀번호를 입력하세요');
    return;
  } else if(!idReg.test(idVal) || !idReg.test(pwVal)){
    alert('12자 이하를 입력하세요');
    if(!idVal) input.blur();
    else input.blur();
    return;
  }

  const gender = document.querySelector("input[name='gender']");
  if(!gender.checked) {
    alert('성별을 체크하세요!'); input.blur(); return;
  }

  const hobbys = document.querySelectorAll("input[type='checkbox']");
  let hobbyCount = 0;
  for(let hobby of hobbys) {
    if(hobby.checked) {
      hobbyCount++;
    }
  }
  if(hobbyCount < 2) alert('취미를 2개이상 선택하세요!'); 
``
  alert('폼이 전송되었습니다!')
  
});
