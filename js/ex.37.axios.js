// // axios 실습
// // https://axios-http.com/kr/

// // 라이브러리 설치 후
// // axios 함수를 사용해서 https://jsonplaceholder.typicode.com/todos
// // 데이터를 get, post, put, patch, delete 하는 코드를 작성해 봅시다

// import axios from 'axios';

// console.log(axios);

// const url = 'https://jsonplaceholder.typicode.com/todos';

// axios.get(url)
// .then(todos => console.log(todos.data))
// .catch(err => console.log(err))

// axios({
//     url: url,
//     method : 'POST',
//     data : {
//         userId : 1,
//         title : "title",
//         completed : true
//     }
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// axios({
//     url: `${url}/1`,
//     method : 'PUT',
//     data : {
//         userId : 1,
//         id : 10,
//         title : "수정 title",
//         completed : false
//     }
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// axios({
//     url: `${url}/1`,
//     method : 'PATCH',
//     data : {
//         title : "수정 title",
//     }
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// axios.delete(`${url}/3`)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))
// axios 실습
// https://axios-http.com/
// 터미널 : npm install axios

// axios 라이브러리를 사용해서 https://jsonplaceholder.typicode.com/todos
// 데이터를 get, post, put, patch, delete 하는 코드를 작성해 봅시다!

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

const request = {
    get(url) {
        return axios({
            method: 'GET',
            url: url
        });
    },
    post(url, payload) {
        return axios({
            method: 'POST',
            url: url,
            data: payload,
            headers : { 'Content-Type': 'application/json' }
        });
    },
    put(url, payload) {
        return axios({
            method: 'PUT',
            url: url,
            data: payload,
            headers : { 'Content-Type': 'application/json' }
        });
    },
    patch(url, payload) {
        return axios({
            method: 'PATCH',
            url: url,
            data: payload,
            headers : { 'Content-Type': 'application/json' }
        });
    },
    delete(url) {
        return axios({
            method: 'DELETE',
            url: url
        });
    }
};

request.get(url)
.then(todos => console.log(todos.data))
.catch(err => console.log(err));

request.post(url, {userId: 1, title: 'javascript', completed: false})
.then(todo => console.log(todo.data))
.catch(err => console.log(err));

request.put(url+'/1', {title: 'jQuery', completed: true})
.then(todo => console.log(todo.data))
.catch(err => console.log(err));

request.patch(url+'/1', {title: 'React'})
.then(todo => console.log(todo.data))
.catch(err => console.log(err));

request.delete(url+'/1')
.then(todo => console.log(todo.data))
.catch(err => console.log(err));