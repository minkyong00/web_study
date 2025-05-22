// 이터러블 실습

// 원격지 JSON 서버에서 JSON서버데이터 획득
fetch('https://jsonplaceholder.typicode.com/todos')
 .then(res => res.json())
 .then(json => {
    // 1. 모든 id를 추출하여 출력
    // console.log(json);
    // console.log(json.map(ele => ele.id));
    
    for(ele of json){
        const { id } = ele;
        console.log(id);
    }
    

    // 2. 모든 completed를 추출하여 true인 것의 개수 출력
    let count = 0;
    for(ele of json){
        const { completed } = ele;
        if(completed) count++;
    }
    console.log('true인 것의 개수: ' + count);
    
    // console.log(json.filter(ele => ele.completed == true).map(ele => ele.completed).length);
    
 })

 
/*
받아온 json은 아래 문자열임
[
    { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
    { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false}
]
*/

