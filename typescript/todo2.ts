// todo2.ts
// 패키지 개념을 도입해서 함수들을 패키지(객체)의 메소드화
// => 전역 변수나 전역 함수는 가급적  적게 사용하는 것이 좋음

interface Todo2 {
    id: number;
    title: string;
    complete: boolean;
}

// Todo객체를 3개를 가진 배열
let todos2: Todo2[] = [
    {id: 1, title: '아침먹기', complete: true},
    {id: 2, title: 'TS공부', complete: true},
    {id: 3, title: '점심먹기', complete: false}
];

// 패키지로 사용할 객체 생성
const todoPKG = {
    // 목록
    getTodos: function(): Todo2[] {
        return todos2;
    },

    // 조회
    getTodo: function(paramId: number): Todo2 {
        return (todos2.filter(todos => todos.id === paramId))[0];
    },

    // id 존재여부 확인
    isExistedTodo: function(paramId: number): boolean {
        return todos2.some(todo => todo.id===paramId);
    },

    // 등록
    // unshift: 배열의 맨 앞에 추가
    // shift: 배열의 맨 앞에서 제거
    // push: 배열의 맨 뒤에 추가
    // top: 배열의 맨 뒤에서 제거
    registTodo: function(paramTodo: Todo2): void {
        if(!this.isExistedTodo(paramTodo.id)) {
            todos2.push(paramTodo);
        }
    },

    // 수정
    updateTodo: function(paramTodo: Todo2): Todo[] {
        const id = paramTodo.id;
        if(this.isExistedTodo(id)) {
            return todos2 = [...this.deleteTodo(id), paramTodo];
        } else {
            return todos2;
        }
    },

    // 삭제
    deleteTodo: function(paramId: number): Todo2[] {
        if(this.isExistedTodo(paramId)) {
            return todos2 = todos2.filter(todo => todo.id!=paramId);
        } else {
            return todos2;
        }
    }
};

// 목록 확인
console.log(todoPKG.getTodos());

// 등록 확인
todoPKG.registTodo({id: 4, title: '저녁먹기', complete: false});
console.log(todoPKG.getTodos());

// 수정 확인
console.log(todoPKG.updateTodo({id: 4, title: '야식먹기', complete: false}));

// 조회 확인
console.log(todoPKG.getTodo(4));

// 삭제 확인
console.log(todoPKG.deleteTodo(4));





























