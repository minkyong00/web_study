// jQuery

/*
    배경색blue 버튼을 클릭하면 div의 배경색을 blue
    배경색red 버튼을 클릭하면 div의 배경색을 red
    크기X2 버튼을 클릭하면 div의 넓이와 높이를 2배씩 증가
    크기/2 버튼을 클릭하면 div의 넓이와 높이를 2배씩 감소
    blue클래스 버튼을 클릭하면 div에 blue라는 클래스를 적용
    red클래스 버튼을 클릭하면 div에 red라는 클래스를 적용
*/

$('button').click(e => {
    switch(e.target.textContent){
        case '배경색blue' : 
            $('div').css('background-color', 'blue'); break;
        case '배경색red' :
            $('div').css('background-color', 'red'); break;
        case '크기X2' : {
            const width = $('div').width();
            const height = $('div').height();
            $('div').animate({
                width: width * 2,
                height: height * 2,
            })
        } break;
        case '크기/2' : {
            const width = $('div').width();
            const height = $('div').height();
            $('div').animate({
                width: width / 2,
                height: height / 2,
            })
        } break;
        case 'blue클래스' :
            // 위에서 배경색 버튼을 클릭하면
            // style이 inline으로 적용되면서 클래스로 스타일을 바꿀수가 없어
            // style 속성을 지우고 blue 클래스 추가함
            $('div').removeAttr('style').addClass('blue'); break;
        case 'red클래스' :
            $('div').removeAttr('style').addClass('red'); break;
    }
});
