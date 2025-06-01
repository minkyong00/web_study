// jQuery

// 추가 버튼을 누르면 리스트에 아이템을 하나 추가
// 삭제 버튼을 누르면 리스트에서 마지막 아이템을 하나 삭제
// 초기화 버튼을 누르면 리스트에서 모든 아이템을 삭제
// 아이템의 텍스트는 1부터 2, 3, 4 ...

let count = 1;

// 추가
$('#add').click(e => {
    const li = $('<li></li>');
    li.attr('data-order', count);
    li.text(count++);
    $('#list').append(li);
});

// 삭제
$('#remove').click(e => {
    $('#list li').last().remove();
});

// 초기화
$('#init').click(e => {
    $('#list').remove();
});

// 번호 선택 삭제
$('#inputRemove').click(e => {
    let inputVal = $('#itemInput').val();
    $('#list li')
        .filter((i, el) => $(el).text() == inputVal)
        .remove();
});
