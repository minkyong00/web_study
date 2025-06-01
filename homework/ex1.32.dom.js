// jQuery

// 사과
// 딸기
// 포도
// 복숭아

const arr = ['사과', '딸기', '포도', '복숭아'];

const ul = $('<ul></ul>');
for (let ele of arr ){
    const li = $('<li></li>');
    li.text(ele);
    ul.append(li);
}
$('body').append(ul);