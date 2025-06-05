// JSON서버를 활용한 REST 실습 (jQuery로 구현)

// 파일
// 1. ex.36.asyncprogramming2.html
// 2. ex.36.asyncprogramming2.js
// 3. todos.json
//     [
//         {"todoid":1, "todo":"할일1", "completed":true},
//         {"todoid":2, "todo":"할일2", "completed":false}
//     ]

// 구현 기능
// 1. 목록버튼 클릭시 할일 목록을 테이블에 표시
// 2. 번호를 입력하고 보기버튼 클릭시 번호에 해당하는 할일을 테이블에 표시
// 3. 할일과 완료여부를 등록하고 등록버튼 클릭시 목록에 할일을 등록
// 4. 할일과 완료여부를 수정하고 수정버튼 클릭시 할일정보를 수정
// 5. 삭제버튼 클릭시 할일정보를 삭제
// 선택구현)
// 1. localStorage 활용
// 2. 할일 검색
// 3. 완료/미완료 검색


let responseArr = null;
const tid = $('#tid');

// 할일 목록 가져오기
$('#listTodos').click(e => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:7777/todos');
    xhr.send();
    xhr.onload = responseArr => {
        responseArr = JSON.parse(xhr.response);
        renderTodos(responseArr);
    };
});

// 아이디 번호 검색
$('#getTodo').click(e => {    
    const xhr = new XMLHttpRequest();
    const tid = $('#tid');
    
    if(!tid.val()){
        alert('확인할 번호를 입력해주세요!');
        tid.focus();
        return;
    }
    xhr.open('GET', `http://localhost:7777/todos/${tid.val()}`);
    xhr.send();
    xhr.onload = () => {
        const todo = JSON.parse(xhr.response);
        $('tbody').empty();
        const tr = $('<tr></tr>');
        tr.append($('<td></td>').html(`
            <input id="id${todo.id}" type='text' value="${todo.id}" />
        `))
        tr.append($('<td></td>').html(`
            <input id="todo${todo.id}" type='text' value="${todo.todo}" />
        `))
        tr.append($('<td></td>').html(`
            <input id="com${todo.id}" type='text' value="${todo.completed}" />
        `))
        const deleteBtn = $('<button>삭제</button>').click(e => {
            deleteTodo(todo.id);
        });
        const modifyBtn = $('<button>수정</button>').click(e => {
            modifyTodo(todo.id);
        })
        const td = $('<td></td>').append(deleteBtn, modifyBtn);
        tr.append(td);
        $('tbody').append(tr);
    };
});

// 등록 버튼 클릭 시 저장
$('#saveTodo').click(e => {
    addTodo();
});

// 할일 검색
$('#searchTodo').click(e => {
    const xhr = new XMLHttpRequest();
    if(!$('#stodo').val()){
        alert('검색할 할일을 입력해주세요!');        
    };

    xhr.open("GET", `http://localhost:7777/todos`);
    xhr.send();
    xhr.onload = () => {
        const todos = JSON.parse(xhr.response);
        let todoArr = [];
        todoArr.push(todos.filter(to => to.todo.includes($('#stodo').val())));
        renderTodos(todoArr[0])
    };
});

// 완료/미완료 검색
$('#selectComBtn').click(e => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:7777/todos');
    xhr.send();
    xhr.onload = () => {
        const todos = JSON.parse(xhr.response);
        let comTodoArr = [];
        console.log($('#selectCom').val());
        
        todos.forEach(e => {
            if(e.completed === $('#selectCom').val()) {
                comTodoArr.push(todos.filter(to => String(to.completed).includes($('#selectCom').val())));
            } else {
                comTodoArr.push(todos.filter(to => String(!to.completed).includes($('#selectCom').val())));
            }
        });
        
        
        // console.log(todos.filter(to => to.completed));
        
        // console.log(todos.filter(to => Array.from(to.completed).includes($('#selectCom').val())));
        renderTodos(comTodoArr[0]);
    };
});


// 할일목록 표에 가져오기
const renderTodos = responseArr => {
    $('tbody').empty();
        for(let todo of responseArr){
            const tr = $('<tr></tr>');
            tr.append($('<td></td>').html(`
                <span id="id${todo.id}" >${todo.id}</span>
            `))
            tr.append($('<td></td>').html(`
                <input id="todo${todo.id}" type='text' value="${todo.todo}" />
            `))
            tr.append($('<td></td>').html(`
                <select id="com${todo.id}">
                    <option value="true" ${todo.completed ? 'selected' : ''}>완료</option>
                    <option value="false" ${!todo.completed ? 'selected' : ''}>미완료</option>
                </select>
            `))
            const deleteBtn = $('<button>삭제</button>').click(e => {
                deleteTodo(todo.id);
            });
            const modifyBtn = $('<button>수정</button>').click(e => {
                modifyTodo(todo.id);
            })
            const td = $('<td></td>').append(deleteBtn, modifyBtn);
            tr.append(td);

            $('tbody').append(tr);
    }
}

// 입력받아 할일 추가
const addTodo = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:7777/todos');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({
        "id": $('#id').val(),
        "todo": $('#todo').val(),
        "completed": $('#selectCom').val()
    }))
    xhr.onload = () => {
        responseArr = JSON.parse(xhr.response);
        renderTodos(responseArr);
    };
}

// 할일 삭제
const deleteTodo = tid => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `http://localhost:7777/todos/${tid}`);
    xhr.send();
    xhr.onload = () => {
        alert('할일을 삭제하시겠습니까?');
    };
}

// 할일 수정
const modifyTodo = tid => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `http://localhost:7777/todos/${tid}`);
    xhr.send(JSON.stringify({
        "id": $(`#id${tid}`).val(),
        "todo": $(`#todo${tid}`).val(),
        "completed": Boolean($(`#com${tid}`).val())
    }));
    xhr.onload = () => {
        alert('할일을 수정하시겠습니까?');
    };
}
