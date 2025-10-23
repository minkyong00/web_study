// todo1.ts
// 함수를 활용한 todo 어플리케이션

// Todo 인터페이스
// 타입스크립트에서 인터페이스는 객체의 타입 역할
interface Todo {
    id: number;
    title: string;
    complete: boolean;
}

// Todo객체를 3개를 가진 배열
let todos: Todo[] = [
    {id: 1, title: '아침먹기', complete: true},
    {id: 2, title: 'TS공부', complete: true},
    {id: 3, title: '점심먹기', complete: false}
];

// 목록
function getTodos(): Todo[] {
    return todos;
}

// 조회
function getTodo(paramId: number): Todo {
    return (todos.filter(todos => todos.id === paramId))[0];
}

// id 존재여부 확인
function isExistedTodo(paramId: number): boolean {
    return todos.some(todo => todo.id===paramId);
}

// 등록
// unshift: 배열의 맨 앞에 추가
// shift: 배열의 맨 앞에서 제거
// push: 배열의 맨 뒤에 추가
// top: 배열의 맨 뒤에서 제거
function registTodo(paramTodo: Todo): void {
    if(!isExistedTodo(paramTodo.id)) {
        todos.push(paramTodo);
    }
}

// 수정
function updateTodo(paramTodo: Todo): Todo[] {
    const id = paramTodo.id;
    if(isExistedTodo(id)) {
        return todos = [...deleteTodo(id), paramTodo];
    } else {
        return todos;
    }
}

// 삭제
function deleteTodo(paramId: number): Todo[] {
    if(isExistedTodo(paramId)) {
        return todos = todos.filter(todo => todo.id!=paramId);
    } else {
        return todos;
    }
}

// 목록 확인
console.log(getTodos());

// 등록 확인
registTodo({id: 4, title: '저녁먹기', complete: false});
console.log(getTodos());

// 수정 확인
console.log(updateTodo({id: 4, title: '야식먹기', complete: true}));

// 조회 확인
console.log(getTodo(4));

// 삭제 확인
console.log(deleteTodo(4));































